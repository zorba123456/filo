import urllib.request
import re
import json
import os
from pypinyin import pinyin, Style
import zhconv

CHINESE_NUMS = {
    '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
    '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
    '十一': 11, '十二': 12, '十三': 13, '十四': 14, '十五': 15,
    '十六': 16, '十七': 17, '十八': 18, '十九': 19, '二十': 20,
    '二十一': 21, '二十二': 22, '二十三': 23, '二十四': 24, '二十五': 25
}

def get_pinyin_initials(word):
    res = pinyin(word, style=Style.FIRST_LETTER)
    initials = []
    for item in res:
        if item and item[0]:
            initials.append(item[0].lower())
    return "".join(initials)

def scrape():
    urls = [
        "https://bookgb.bfnn.org/books3/2085.htm",
        "https://bookgb.bfnn.org/books3/2086.htm",
        "https://bookgb.bfnn.org/books3/2087.htm"
    ]
    
    all_terms = []
    
    for url in urls:
        print(f"正在抓取: {url} ...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, timeout=20) as response:
                html_bytes = response.read()
            html = html_bytes.decode("gbk", errors="ignore")
            
            # 清理 HTML
            html = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL | re.IGNORECASE)
            html = re.sub(r'<style.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
            text = re.sub(r'<[^>]+>', '\n', html)
            text = re.sub(r'&nbsp;', ' ', text)
            text = re.sub(r'&amp;', '&', text)
            text = re.sub(r'&lt;', '<', text)
            text = re.sub(r'&gt;', '>', text)
            text = re.sub(r'\r', '\n', text)
            
            tokens = []
            stroke_pattern = r'(?:^|\s)(一|二|三|四|五|六|七|八|九|十|十一|十二|十三|十四|十五|十六|十七|十八|十九|二十|二十一|二十二|二十三|二十四|二十五)划(?=\s|$)'
            for m in re.finditer(stroke_pattern, text):
                tokens.append((m.start(1), 'stroke', m.group(1), m.end(1) + 1))
            for m in re.finditer(r'【([^】]+)】', text):
                tokens.append((m.start(), 'term', m.group(1), m.end()))
                
            tokens.sort(key=lambda x: x[0])
            
            current_strokes = 0
            url_terms_count = 0
            for i in range(len(tokens)):
                t_type = tokens[i][1]
                t_val = tokens[i][2]
                t_end = tokens[i][3]
                
                if t_type == 'stroke':
                    current_strokes = CHINESE_NUMS[t_val]
                elif t_type == 'term':
                    def_start = t_end
                    def_end = tokens[i+1][0] if i + 1 < len(tokens) else len(text)
                    definition = text[def_start:def_end]
                    
                    lines = [line.strip() for line in definition.split('\n')]
                    cleaned_lines = []
                    for line in lines:
                        if line:
                            if line in CHINESE_NUMS:
                                continue
                            if line.endswith("划") and line[:-1] in CHINESE_NUMS:
                                continue
                            cleaned_lines.append(line)
                    
                    def_str = "\n".join(cleaned_lines)
                    
                    # 翻译为繁体中文
                    name_trad = zhconv.convert(t_val, 'zh-hant')
                    def_trad = zhconv.convert(def_str, 'zh-hant')
                    
                    all_terms.append({
                        'name': t_val,
                        'name_trad': name_trad,
                        'definition': def_str,
                        'definition_trad': def_trad,
                        'strokes': current_strokes,
                        'pinyin': get_pinyin_initials(t_val)
                    })
                    url_terms_count += 1
            print(f"成功解析 {url_terms_count} 个词条")
            
        except Exception as e:
            print(f"抓取或解析失败 {url}: {e}")
            
    # 保存结果
    output_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(output_dir)
    dest_path = os.path.join(project_dir, 'src', 'weishi_terms.json')
    
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    with open(dest_path, 'w', encoding='utf-8') as f:
        json.dump(all_terms, f, ensure_ascii=False, indent=2)
        
    print(f"已生成词典数据文件: {dest_path}")
    print(f"总计词条数: {len(all_terms)}")

if __name__ == '__main__':
    scrape()
