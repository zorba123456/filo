// Data representing the mapping of Cheng Weishi Lun versions
const MAPPING_DATA = [
  {
    id: "vol1",
    volNum: "卷第一",
    volTitle: "我法二执与外道小乘批判",
    volPages: "PDF: P.3",
    topic: "稽首唯识性、造论宗旨（破二执、证二空、得二果）、破外道我执（数论、胜论、邪命等）、破余乘我执（犊子部等）、破外道法执、破小乘法执（极微、色法等）",
    categories: ["logic"],
    weitat: {
      book: "Book I: Atmagraha and Dharmagraha",
      pages: "PDF: P.139 - P.196",
      details: [
        { title: "Stanza of Homage & Purpose of Treatise (Stanza 1)", meta: "PDF P.141" },
        { title: "Refutation of Atman theories (Samkhya, Nirgrantha, etc.)", meta: "PDF P.145" },
        { title: "Refutation of Hinayana Atman theories", meta: "PDF P.151" },
        { title: "Refutation of Dharma theories of Tirthikas", meta: "PDF P.169" }
      ]
    },
    cook: {
      chapter: "Chapter I: Attachment to Self and Attachment to Dharmas",
      pages: "PDF: P.9 - P.44",
      details: [
        { title: "1. Attachment to Self (Refutation of Non-Buddhists)", meta: "PDF P.9" },
        { title: "Refutation of Hinayana theories of Self", meta: "PDF P.19" },
        { title: "2. Attachment to Dharmas (Refutation of Tirthikas)", meta: "PDF P.23" }
      ]
    }
  },
  {
    id: "vol2",
    volNum: "卷第二",
    volTitle: "破不相应行法与阿赖耶识初探",
    volPages: "PDF: P.11",
    topic: "破心不相应行法（续）、破无为法、破能取所取、释“假说我法”与“识变”（因果能变）、初能变阿赖耶识三相（自相、果相、因相）",
    categories: ["logic", "alaya"],
    weitat: {
      book: "Book I (ends P.234) / Book II: The Alayavijnana (starts P.235)",
      pages: "Book I: P.169-234 | Book II: P.235-241",
      details: [
        { title: "Refutation of Viprayuktasamskaras (Unassociated)", meta: "PDF P.197" },
        { title: "Refutation of Asamskrtas (Unconditioned)", meta: "PDF P.217" },
        { title: "Upacara (Metaphor) & Vijnanaparinama (Evolution)", meta: "PDF P.225" },
        { title: "BOOK II: Lakasans of Alayavijnana (Stanza 2-3)", meta: "PDF P.235" }
      ]
    },
    cook: {
      chapter: "Chapter I (ends P.44) / Chapter II (P.45) / Chapter III: The Store Consciousness (starts P.47)",
      pages: "Ch. I: P.23-44 | Ch. II: P.45 | Ch. III: P.47-49",
      details: [
        { title: "Refutation of Unassociated and Unconditioned Dharmas", meta: "PDF P.33" },
        { title: "Chapter II: The Evolutions of Consciousness", meta: "PDF P.45" },
        { title: "Chapter III: Store Consciousness: Retribution & Holder of Seeds", meta: "PDF P.47" }
      ]
    }
  },
  {
    id: "vol3",
    volNum: "卷第三",
    volTitle: "阿赖耶识相应心所与种子学说",
    volPages: "PDF: P.20",
    topic: "阿赖耶识相应心所（五遍行）、受相应（唯舍受）、三性（无覆无记）、因相（种子六义、本有/始起、熏习说）、三分/四分说、行相与所缘（不可知执受处了）",
    categories: ["alaya"],
    weitat: {
      book: "Book II: The Alayavijnana (continued)",
      pages: "PDF: P.241 - P.309",
      details: [
        { title: "Theories of Bijas (Definitions, Origin, and Six Characteristics)", meta: "PDF P.241" },
        { title: "Theory of Bhagas (Divisions of Consciousness: 4 Parts)", meta: "PDF P.271" },
        { title: "Samprayuktas (Five Caittas of Alaya & Sensation)", meta: "PDF P.287" },
        { title: "Moral Nature & Moral Species of Alaya", meta: "PDF P.297" }
      ]
    },
    cook: {
      chapter: "Chapter III: The Store Consciousness (continued)",
      pages: "PDF: P.49 - P.83",
      details: [
        { title: "The Origin and Characteristics of Seeds", meta: "PDF P.49" },
        { title: "The Structure of Consciousness (Four Parts/Bhagas)", meta: "PDF P.61" },
        { title: "The Five Associated Mental Functions & Neutral Sensation", meta: "PDF P.71" }
      ]
    }
  },
  {
    id: "vol4",
    volNum: "卷第四",
    volTitle: "阿赖耶识存在证明与末那识引入",
    volPages: "PDF: P.29",
    topic: "阿赖耶识恒转（如暴流）、断位（阿罗汉位舍）、阿赖耶识的存在证明（大乘教证、小乘教证、十因逻辑论证）、第二能变末那识（自性行相、所依、所缘、我执分类）",
    categories: ["alaya", "manas"],
    weitat: {
      book: "Book II (ends P.380) / Book III: The Manas Consciousness (starts P.381)",
      pages: "Book II: P.309-380 | Book III: P.381-389",
      details: [
        { title: "Cessation of the Alayavijnana (Arhat stage)", meta: "PDF P.309" },
        { title: "Proofs of the Existence of Alayavijnana (Logic & Scripture)", meta: "PDF P.319" },
        { title: "BOOK III: Name and Supporting Basis (Asraya) of Manas", meta: "PDF P.381" },
        { title: "The Alambana (Object) of Manas (Stanza 5)", meta: "PDF P.383" }
      ]
    },
    cook: {
      chapter: "Chapter III (ends P.112) / Chapter IV: Manas (starts P.113)",
      pages: "Ch. III: P.83-112 | Ch. IV: P.113-115",
      details: [
        { title: "Scriptural and Logical Proofs of the Store Consciousness", meta: "PDF P.83" },
        { title: "Chapter IV: Next is the Second Transforming Consciousness: Manas", meta: "PDF P.113" },
        { title: "The Support and Object of Perception of Manas", meta: "PDF P.114" }
      ]
    }
  },
  {
    id: "vol5",
    volNum: "卷第五",
    volTitle: "末那识相应心所、证明与前六识引入",
    volPages: "PDF: P.39",
    topic: "末那识相应心所（四根本烦恼等）、受相应、三性、界地、伏断位、末那识存在证明（六大教理证）、第三能变了境能变（前六识自相、名义、行相所缘、三性）",
    categories: ["manas", "six"],
    weitat: {
      book: "Book III (ends P.472) / Book IV: The First Six Consciousnesses (starts P.473)",
      pages: "Book III: P.389-472 | Book IV: P.473-485",
      details: [
        { title: "Samprayoga of Manas (Four Klesas & other Caittas)", meta: "PDF P.419" },
        { title: "Cessation & Proofs of Manas (Aveniki Avidya, etc.)", meta: "PDF P.451" },
        { title: "BOOK IV: Names of the Six Consciousnesses (Stanza 8)", meta: "PDF P.473" },
        { title: "Essential Nature & Moral Species of the Six", meta: "PDF P.481" }
      ]
    },
    cook: {
      chapter: "Chapter IV (ends P.152) / Chapter V: The Six Kinds of Sense Consciousness (starts P.153)",
      pages: "Ch. IV: P.115-152 | Ch. V: P.153-155",
      details: [
        { title: "The Defiled Mental States Associated with Manas (Ignorance, etc.)", meta: "PDF P.125" },
        { title: "The Proofs of the Existence of Manas (Six Proofs)", meta: "PDF P.143" },
        { title: "Chapter V: Third Transforming Consciousness with Sixfold Distinction", meta: "PDF P.153" }
      ]
    }
  },
  {
    id: "vol6",
    volNum: "卷第六",
    volTitle: "前六识相应心所（善位与烦恼位心所）",
    volPages: "PDF: P.49",
    topic: "前六识相应心所详细剖析：11种善心所（信、惭、愧等）、6种根本烦恼（贪、嗔、痴、慢、疑、恶见）、20种随烦恼前部（大/中/小随烦恼）",
    categories: ["six"],
    weitat: {
      book: "Book IV: The First Six Consciousnesses (continued)",
      pages: "PDF: P.489 - P.607",
      details: [
        { title: "Samprayuktas of the Six & Three Sensations (Vedanas)", meta: "PDF P.489" },
        { title: "The Wholesome Caittas (Faith, Shame, Non-greed, etc.)", meta: "PDF P.523" },
        { title: "The Klesas (Primary Vexations: Lust, Anger, etc.)", meta: "PDF P.547" },
        { title: "The Upaklesas (Secondary Vexations: Fury, Hatred, etc.)", meta: "PDF P.567" }
      ]
    },
    cook: {
      chapter: "Chapter V: The Six Kinds of Sense Consciousness (continued)",
      pages: "PDF: P.155 - P.211",
      details: [
        { title: "Associated Mental Functions (Universal & Special)", meta: "PDF P.155" },
        { title: "The Wholesome Mental Functions (11 Good States)", meta: "PDF P.159" },
        { title: "The Afflictions and Secondary Afflictions", meta: "PDF P.175" }
      ]
    }
  },
  {
    id: "vol7",
    volNum: "卷第七",
    volTitle: "不定心所、八识关系与唯识宗理",
    volPages: "PDF: P.59",
    topic: "20随烦恼后部、4种不定心所（悔、眠、寻、伺）、前六识起现生起因缘、前八识俱转一异关系、唯识正理之论证（是诸识转变、破色无境、唯识九难答释）",
    categories: ["six", "logic"],
    weitat: {
      book: "Book IV (ends P.634) / Book V: Vijnaptimatrata (starts P.635)",
      pages: "Book IV: P.607-634 | Book V: P.635-659",
      details: [
        { title: "Aniyatas (Indeterminate: Stupor, Regret, etc.)", meta: "PDF P.607" },
        { title: "Conditions of Manifestation & Relations of 8 Consciousnesses", meta: "PDF P.617" },
        { title: "BOOK V: Vijnaptimatrata Explanation (Stanza 17)", meta: "PDF P.635" },
        { title: "Replies to Objections (Refuting 9 Doubts)", meta: "PDF P.643" }
      ]
    },
    cook: {
      chapter: "Chapter V (ends P.230) / Chapter VI (P.231) / Chapter VII: Consciousness Only (starts P.232)",
      pages: "Ch. V: P.211-230 | Ch. VI: P.231 | Ch. VII: P.232-239",
      details: [
        { title: "Conditions of Manifestation of the Six Consciousnesses", meta: "PDF P.211" },
        { title: "Chapter VI: Oneness or Difference of the Eight Consciousnesses", meta: "PDF P.231" },
        { title: "Chapter VII: Consciousness Only: Proof & Replies to 9 Objections", meta: "PDF P.232" }
      ]
    }
  },
  {
    id: "vol8",
    volNum: "卷第八",
    volTitle: "四缘十因、生死流转与三自性",
    volPages: "PDF: P.68",
    topic: "因果辩证：四缘、十五处、十因、五果、生死输转与三熏习（十二有支、二取与业习气）、三自性定义（遍计所执性、依他起性、圆成实性）及与诸门相摄",
    categories: ["logic"],
    weitat: {
      book: "Book VI: Causality / Book VII: Samsara / Book VIII: The Three Svabhavas (starts P.750)",
      pages: "Book VI: P.660-708 | Book VII: P.709-749 | Book VIII: P.750-784",
      details: [
        { title: "BOOK VI: The Four Pratyayas & Ten Hetus (Causes)", meta: "PDF P.660" },
        { title: "BOOK VII: Stanzas 18 (Bijas & Karma in Samsara)", meta: "PDF P.709" },
        { title: "The Twelve Angas (Dependent Origination)", meta: "PDF P.717" },
        { title: "BOOK VIII: Definition of the Three Svabhavas (Stanza 20-22)", meta: "PDF P.750" }
      ]
    },
    cook: {
      chapter: "Chapter VIII: Causality / Chapter IX: Birth & Death / Chapter X: Three Natures (starts P.280)",
      pages: "Ch. VIII: P.240-261 | Ch. IX: P.262-279 | Ch. X: P.280-287",
      details: [
        { title: "Chapter VIII: Causality (Four Conditions & Ten Causes)", meta: "PDF P.240" },
        { title: "Chapter IX: The Habit Energies of Actions & Graspings", meta: "PDF P.262" },
        { title: "The Twelve Links of Dependent Origination", meta: "PDF P.267" },
        { title: "Chapter X: The Three Natures of Existence (Stanza 20-22)", meta: "PDF P.280" }
      ]
    }
  },
  {
    id: "vol9",
    volNum: "卷第九",
    volTitle: "三无性与唯识修证前三位",
    volPages: "PDF: P.78",
    topic: "三无性（相无性、生无性、胜义无性）、五位修证路径：资粮位（乃至未起识）、加行位（现前立少物）、通达位（若时于所缘）、修习位前部（十地与十波罗蜜多）",
    categories: ["logic", "path"],
    weitat: {
      book: "Book VIII (ends P.791) / Book IX: The Holy Path (starts P.792)",
      pages: "Book VIII: P.785-791 | Book IX: P.792-826",
      details: [
        { title: "The Three Svabhavas and Three Nihsvabhavatas (Stanza 23-25)", meta: "PDF P.785" },
        { title: "BOOK IX: The Five Stages of Path (Overview & Stanza 26)", meta: "PDF P.792" },
        { title: "Sambharavastha (Stage of Provisioning)", meta: "PDF P.796" },
        { title: "Prayogavastha (Stage of Applied Effort) & Prativedhavastha (Penetration)", meta: "PDF P.802" }
      ]
    },
    cook: {
      chapter: "Chapter X (ends P.295) / Chapter XI: The Holy Path (starts P.296)",
      pages: "Ch. X: P.288-295 | Ch. XI: P.296-314",
      details: [
        { title: "The Three Natures and Three Non-Natures", meta: "PDF P.288" },
        { title: "Chapter XI: The Five States of the Holy Path", meta: "PDF P.296" },
        { title: "The Stage of Applied Effort (Prayoga) & Penetration", meta: "PDF P.306" }
      ]
    }
  },
  {
    id: "vol10",
    volNum: "卷第十",
    volTitle: "修习位障碍真如与究竟位佛果",
    volPages: "PDF: P.88",
    topic: "修习位之十一障与十真如、究竟位（究竟证会、解脱身与法身、大圆镜智等四智、佛之三身、利乐有情）、全书结颂与释文",
    categories: ["path"],
    weitat: {
      book: "Book IX: The Holy Path of Attainment (continued)",
      pages: "PDF: P.826 - P.946",
      details: [
        { title: "Bavanavastha: The Ten Bhumis (Bodhisattva Lands)", meta: "PDF P.826" },
        { title: "The Ten Paramitas (Perfections) & Eleven Avaranas (Obstacles)", meta: "PDF P.834" },
        { title: "Nisthavastha (Stage of Ultimate Realization: Stanza 30)", meta: "PDF P.906" },
        { title: "The Four Wisdoms (Mirror Wisdom, etc.) & Buddha Bodies", meta: "PDF P.916" }
      ]
    },
    cook: {
      chapter: "Chapter XI (ends P.339) / Chapter XII: Nirvana (P.340) / Chapter XIII: Bodhi (P.346) / Chapter XIV: The Dharma Body (P.354) / Chapter XV: Conclusion (P.368)",
      pages: "Ch. XI: P.314-339 | Ch. XII: P.340-345 | Ch. XIII: P.346-353 | Ch. XIV: P.354-367 | Ch. XV: P.368",
      details: [
        { title: "The Obstacles and Realizations of the Ten Bhumis", meta: "PDF P.314" },
        { title: "Chapter XII: The Stage of Culmination: Nirvana", meta: "PDF P.340" },
        { title: "Chapter XIII & XIV: Great Bodhi (Four Wisdoms) & Dharma Body", meta: "PDF P.346" },
        { title: "Chapter XV: Conclusion (Final Verse & Commentary)", meta: "PDF P.368" }
      ]
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Theme Switching Logic
  const themeSelect = document.getElementById("theme-select");
  if (themeSelect) {
    const savedTheme = localStorage.getItem("filo_theme") || "dark";
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
    
    themeSelect.addEventListener("change", (e) => {
      const theme = e.target.value;
      localStorage.setItem("filo_theme", theme);
      applyTheme(theme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  const tableBody = document.getElementById("table-body");
  const searchInput = document.getElementById("search-input");
  const filterGroup = document.getElementById("filter-group");
  const noResults = document.getElementById("no-results");
  const compareTable = document.getElementById("compare-table");

  // Tab switching logic
  const tabMapping = document.getElementById("tab-mapping");
  const tabStudy = document.getElementById("tab-study");
  const tabBaifa = document.getElementById("tab-baifa");
  const tabDictionary = document.getElementById("tab-dictionary");
  const tabAbout = document.getElementById("tab-about");
  
  const mappingPanel = document.getElementById("mapping-panel");
  const studyPanel = document.getElementById("study-panel");
  const baifaPanel = document.getElementById("baifa-panel");
  const dictionaryPanel = document.getElementById("dictionary-panel");
  const aboutPanel = document.getElementById("about-panel");

  const tabs = [
    { button: tabMapping, panel: mappingPanel },
    { button: tabStudy, panel: studyPanel },
    { button: tabBaifa, panel: baifaPanel },
    { button: tabDictionary, panel: dictionaryPanel },
    { button: tabAbout, panel: aboutPanel }
  ];

  function switchTab(targetId) {
    tabs.forEach(tab => {
      if (tab.button && tab.panel) {
        if (tab.button.id === targetId) {
          tab.button.classList.add("active");
          tab.panel.style.display = "block";
        } else {
          tab.button.classList.remove("active");
          tab.panel.style.display = "none";
        }
      }
    });
  }

  // Hash Router implementation
  function handleHashChange() {
    const rawHash = window.location.hash.slice(1);
    if (!rawHash) {
      window.history.replaceState(null, null, "#mapping");
      switchTab("tab-mapping");
      return;
    }

    const [pathInfo, queryString] = rawHash.split('?');
    const pathParts = pathInfo.split('/');
    const mainPath = pathParts[0];

    const pathTabMap = {
      "mapping": "tab-mapping",
      "study": "tab-study",
      "baifa": "tab-baifa",
      "dictionary": "tab-dictionary",
      "about": "tab-about"
    };

    const targetTab = pathTabMap[mainPath] || "tab-mapping";
    switchTab(targetTab);

    // Sub-route handling for Study
    if (mainPath === "study") {
      const volId = pathParts[1];
      if (volId && (volId === "vol1" || volId === "vol2")) {
        if (studyVolumeGrid && studyReadingView) {
          studyVolumeGrid.style.display = "none";
          studyReadingView.style.display = "grid";
          updateSidebarSections(volId);
          renderStudyCards();
        }
      } else {
        if (studyVolumeGrid && studyReadingView) {
          studyReadingView.style.display = "none";
          studyVolumeGrid.style.display = "block";
        }
      }
    }

    // Sub-route handling for Dictionary
    if (mainPath === "dictionary" && queryString) {
      const params = new URLSearchParams(queryString);
      const term = params.get("term");
      if (term && typeof openTermInDictionaryDOM === "function") {
        openTermInDictionaryDOM(term);
      }
    }
  }

  window.addEventListener("hashchange", handleHashChange);

  if (tabMapping) tabMapping.addEventListener("click", () => { window.location.hash = "mapping"; });
  if (tabStudy) tabStudy.addEventListener("click", () => { window.location.hash = "study"; });
  if (tabBaifa) tabBaifa.addEventListener("click", () => { window.location.hash = "baifa"; });
  if (tabDictionary) tabDictionary.addEventListener("click", () => { window.location.hash = "dictionary"; });
  if (tabAbout) tabAbout.addEventListener("click", () => { window.location.hash = "about"; });

  let activeFilter = "all";
  let searchQuery = "";
  let expandedRowId = null;

  // Linkify terms in compare table
  function linkifyCompareText(text) {
    if (!weishiTerms || weishiTerms.length === 0) return text;
    
    // Collect all terms of length >= 3 (both simplified and traditional)
    const termsSet = new Set();
    weishiTerms.forEach(t => {
      if (t.name && t.name.length >= 3) {
        termsSet.add(t.name);
      }
      if (t.name_trad && t.name_trad.length >= 3) {
        termsSet.add(t.name_trad);
      }
    });
    
    const sortedTerms = Array.from(termsSet).sort((a, b) => b.length - a.length);
    
    // Escape regex chars
    const escapedTerms = sortedTerms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    // Select top 300 terms to cover both simplified and traditional
    const pattern = new RegExp(`(${escapedTerms.slice(0, 300).join('|')})`, 'g');
    
    return text.replace(pattern, (match) => {
      return `<span class="compare-term-link" onclick="window.showTermByName('${match}')">${match}</span>`;
    });
  }

  // Render function for comparison table
  function renderTable() {
    tableBody.innerHTML = "";
    
    const filteredData = MAPPING_DATA.filter(item => {
      const matchesFilter = activeFilter === "all" || item.categories.includes(activeFilter);
      const matchesSearch = 
        item.volNum.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.volTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.weitat.book.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cook.chapter.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (filteredData.length === 0) {
      compareTable.style.display = "none";
      noResults.style.display = "block";
      return;
    }

    compareTable.style.display = "table";
    noResults.style.display = "none";

    filteredData.forEach(item => {
      // Main row
      const mainRow = document.createElement("tr");
      mainRow.id = `row-${item.id}`;
      if (expandedRowId === item.id) {
        mainRow.classList.add("active");
      }

      mainRow.innerHTML = `
        <td>
          <span class="badge badge-vol">${item.volNum}</span>
          <div class="vol-title-cn" style="margin-top: 0.5rem;">${item.volTitle}</div>
        </td>
        <td>
          <div class="topic-desc">${linkifyCompareText(item.topic)}</div>
          <div class="page-details" style="margin-top: 0.75rem;">${item.volPages}</div>
        </td>
        <td>
          <span class="badge badge-book">Wei Tat (9 Book)</span>
          <div style="font-weight: 600; color: #fff; margin-top: 0.5rem; font-size: 0.9rem;">${item.weitat.book}</div>
          <div class="page-details">${item.weitat.pages}</div>
        </td>
        <td>
          <span class="badge badge-chapter">BDK / Cook (15 Ch)</span>
          <div style="font-weight: 600; color: #fff; margin-top: 0.5rem; font-size: 0.9rem;">${item.cook.chapter}</div>
          <div class="page-details">${item.cook.pages}</div>
        </td>
      `;

      mainRow.addEventListener("click", (e) => {
        // Prevent row expansion if clicking on a term link
        if (e.target.classList.contains("compare-term-link")) {
          return;
        }
        toggleExpandRow(item.id);
      });
      tableBody.appendChild(mainRow);

      // Expanded details row
      if (expandedRowId === item.id) {
        const detailRow = document.createElement("tr");
        detailRow.className = "expanded-row-container";
        detailRow.innerHTML = `
          <td colspan="4">
            <div class="expanded-content">
              <!-- Wei Tat Details -->
              <div class="detail-section">
                <h4>${item.weitat.book} 详细小节</h4>
                <div>
                  ${item.weitat.details.map(det => `
                    <div class="detail-item">
                      <div class="detail-item-title">🔹 ${det.title}</div>
                      <div class="detail-item-meta">${det.meta}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <!-- Cook Details -->
              <div class="detail-section cook-section">
                <h4>${item.cook.chapter} 详细小节</h4>
                <div>
                  ${item.cook.details.map(det => `
                    <div class="detail-item">
                      <div class="detail-item-title">🔸 ${det.title}</div>
                      <div class="detail-item-meta">${det.meta}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </td>
        `;
        tableBody.appendChild(detailRow);
      }
    });
  }

  function toggleExpandRow(id) {
    if (expandedRowId === id) {
      expandedRowId = null;
    } else {
      expandedRowId = id;
    }
    renderTable();
  }

  // Event Listeners for search & filters (Compare table)
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTable();
  });

  filterGroup.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-filter")) {
      filterGroup.querySelector(".btn-filter.active").classList.remove("active");
      e.target.classList.add("active");
      activeFilter = e.target.dataset.filter;
      renderTable();
    }
  });


  // ==========================================
  // WEISHI DICTIONARY PORTAL IMPLEMENTATION
  // ==========================================
  
  let weishiTerms = [];
  let displayTerms = [];
  let isTraditional = false;
  let showOnlyFavorites = false;
  let searchOnlyNames = true;
  let activeAlphabet = "all";
  let activeStroke = "all";
  let dictSearchQuery = "";
  let currentOffset = 0;
  const RESULTS_PER_PAGE = 30;

  // Favorites & History cache
  let favorites = JSON.parse(localStorage.getItem("filo_dict_favorites") || "[]");
  let history = JSON.parse(localStorage.getItem("filo_dict_history") || "[]");

  // DOM Elements
  const dictSearchInput = document.getElementById("dict-search-input");
  const dictSearchOnlyNames = document.getElementById("dict-search-only-names");
  const btnToggleFavs = document.getElementById("btn-toggle-favs");
  const btnToggleTS = document.getElementById("btn-toggle-t-s");
  const alphabetGroup = document.getElementById("alphabet-group");
  const strokeGroup = document.getElementById("stroke-group");
  const btnLoadMore = document.getElementById("btn-dict-load-more");

  // Load Dictionary Data
  async function loadDictionary() {
    try {
      const response = await fetch(import.meta.env.BASE_URL + "data/weishi_terms.json");
      weishiTerms = await response.json();
      
      updateAlphabetFilter();
      updateStrokeFilter();
      updateFavCount();
      renderFavorites();
      renderHistory();
      
      // Render compare table after terms are loaded to linkify them
      renderTable();
      
      filterAndRenderDict();
    } catch (e) {
      console.error("Failed to load dictionary JSON:", e);
    }
  }

  // Generate alphabet filter buttons dynamically
  function updateAlphabetFilter() {
    const letters = new Set();
    weishiTerms.forEach(t => {
      if (t.pinyin && t.pinyin[0]) {
        letters.add(t.pinyin[0].toUpperCase());
      }
    });
    const sortedLetters = Array.from(letters).sort();
    
    alphabetGroup.innerHTML = `<button class="btn-char active" data-char="all">全部</button>`;
    sortedLetters.forEach(char => {
      const btn = document.createElement("button");
      btn.className = "btn-char";
      btn.dataset.char = char.toLowerCase();
      btn.textContent = char;
      alphabetGroup.appendChild(btn);
    });
  }

  // Generate stroke filter buttons dynamically
  function updateStrokeFilter() {
    const strokes = new Set();
    weishiTerms.forEach(t => {
      strokes.add(t.strokes);
    });
    const sortedStrokes = Array.from(strokes).sort((a, b) => a - b);
    
    strokeGroup.innerHTML = `<button class="btn-stroke active" data-stroke="all">全部</button>`;
    sortedStrokes.forEach(num => {
      const btn = document.createElement("button");
      btn.className = "btn-stroke";
      btn.dataset.stroke = num;
      btn.textContent = `${num}画`;
      strokeGroup.appendChild(btn);
    });
  }

  // Highlight search keywords
  function highlightText(text, query) {
    if (!query) return text;
    // Escape regex chars
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, `<mark class="search-highlight">$1</mark>`);
  }

  // Linkify related terms inside definitions e.g. 参阅‘五位无心’条
  function linkifyDefinition(text) {
    return text.replace(/[‘“]([^’”]{2,15})[’”](?:条|分)?/g, (match, termName) => {
      return `<a href="#" class="dict-ref-link" data-term="${termName}">‘${termName}’</a>`;
    });
  }

  // Filter and render terms
  function filterAndRenderDict(append = false) {
    if (!append) {
      currentOffset = 0;
      document.getElementById("dict-cards-list").innerHTML = "";
    }
    
    const query = dictSearchQuery.trim().toLowerCase();
    
    displayTerms = weishiTerms.filter(item => {
      // 1. Favorites only filter
      if (showOnlyFavorites && !favorites.includes(item.name)) return false;
      
      // 2. Alphabet filter
      if (activeAlphabet !== "all") {
        if (!item.pinyin || item.pinyin[0] !== activeAlphabet) return false;
      }
      
      // 3. Stroke filter
      if (activeStroke !== "all") {
        if (item.strokes !== parseInt(activeStroke)) return false;
      }
      
      // 4. Keyword filter (against name, traditional name, pinyin, definition)
      if (query) {
        const nameMatch = item.name.toLowerCase().includes(query) || 
                          item.name_trad.toLowerCase().includes(query);
        const pinyinMatch = item.pinyin.toLowerCase().includes(query);
        
        if (searchOnlyNames) {
          return nameMatch || pinyinMatch;
        } else {
          const defMatch = item.definition.toLowerCase().includes(query) || 
                           item.definition_trad.toLowerCase().includes(query);
          return nameMatch || pinyinMatch || defMatch;
        }
      }
      
      return true;
    });

    document.getElementById("dict-result-count").textContent = displayTerms.length;
    
    const slice = displayTerms.slice(currentOffset, currentOffset + RESULTS_PER_PAGE);
    renderDictSlice(slice);
    
    // Pagination visibility
    const loadMoreContainer = document.getElementById("dict-load-more-container");
    if (currentOffset + RESULTS_PER_PAGE < displayTerms.length) {
      loadMoreContainer.style.display = "block";
    } else {
      loadMoreContainer.style.display = "none";
    }
    
    // Empty state visibility
    const noResultsEl = document.getElementById("dict-no-results");
    if (displayTerms.length === 0) {
      noResultsEl.style.display = "block";
    } else {
      noResultsEl.style.display = "none";
    }
  }

  // Render cards slice in DOM
  function renderDictSlice(slice) {
    const listEl = document.getElementById("dict-cards-list");
    
    slice.forEach(item => {
      const card = document.createElement("div");
      card.className = "dict-card glass-card";
      card.dataset.termName = item.name;
      
      const displayName = isTraditional ? item.name_trad : item.name;
      const displayDef = isTraditional ? item.definition_trad : item.definition;
      const isFav = favorites.includes(item.name);
      
      card.innerHTML = `
        <div class="dict-card-header">
          <div class="dict-card-title-group">
            <span class="dict-term-title">${highlightText(displayName, dictSearchQuery)}</span>
            <span class="badge badge-strokes">${item.strokes} 画</span>
            <span class="badge badge-pinyin-initial">${item.pinyin}</span>
          </div>
          <button class="btn-fav-card ${isFav ? 'active' : ''}" data-term="${item.name}">
            ${isFav ? '★' : '☆'}
          </button>
        </div>
        <div class="dict-card-body" style="display: none;">
          <div class="dict-definition">${linkifyDefinition(displayDef)}</div>
        </div>
      `;
      
      // Click event for header (excluding the favorite button)
      card.querySelector(".dict-card-header").addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-fav-card")) {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(item.name, e.target);
          return;
        }
        
        const body = card.querySelector(".dict-card-body");
        const isOpen = body.style.display === "block";
        
        if (isOpen) {
          body.style.display = "none";
          card.classList.remove("expanded");
        } else {
          body.style.display = "block";
          card.classList.add("expanded");
          addToHistory(item.name);
        }
      });
      
      listEl.appendChild(card);
    });
  }

  // Expand a card programmatically
  function expandTermCard(card, termName) {
    const body = card.querySelector(".dict-card-body");
    body.style.display = "block";
    card.classList.add("expanded");
    addToHistory(termName);
  }

  // Handle Favorites toggle
  function toggleFavorite(name, btnEl) {
    const idx = favorites.indexOf(name);
    if (idx === -1) {
      favorites.push(name);
      if (btnEl) {
        btnEl.textContent = '★';
        btnEl.classList.add("active");
      }
    } else {
      favorites.splice(idx, 1);
      if (btnEl) {
        btnEl.textContent = '☆';
        btnEl.classList.remove("active");
      }
    }
    localStorage.setItem("filo_dict_favorites", JSON.stringify(favorites));
    updateFavCount();
    renderFavorites();
    
    if (showOnlyFavorites) {
      filterAndRenderDict();
    }
  }

  function updateFavCount() {
    document.getElementById("fav-count").textContent = favorites.length;
  }

  // Render favorites list in sidebar
  function renderFavorites() {
    const container = document.getElementById("fav-list-container");
    container.innerHTML = "";
    if (favorites.length === 0) {
      container.innerHTML = `<div class="sidebar-empty">暂无收藏词条</div>`;
      return;
    }
    
    favorites.forEach(name => {
      const el = document.createElement("div");
      el.className = "sidebar-item";
      
      const termObj = weishiTerms.find(t => t.name === name);
      const displayName = isTraditional && termObj ? termObj.name_trad : name;
      
      el.innerHTML = `
        <span class="sidebar-item-name">${displayName}</span>
        <button class="btn-sidebar-remove" data-term="${name}">✕</button>
      `;
      
      el.querySelector(".sidebar-item-name").addEventListener("click", () => {
        window.showTermByName(name);
      });
      
      el.querySelector(".btn-sidebar-remove").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(name);
        const cardBtn = document.querySelector(`.dict-card[data-term-name="${name}"] .btn-fav-card`);
        if (cardBtn) {
          cardBtn.textContent = '☆';
          cardBtn.classList.remove("active");
        }
      });
      
      container.appendChild(el);
    });
  }

  // Add to recently viewed history
  function addToHistory(name) {
    const idx = history.indexOf(name);
    if (idx !== -1) {
      history.splice(idx, 1);
    }
    history.unshift(name);
    if (history.length > 10) {
      history.pop();
    }
    localStorage.setItem("filo_dict_history", JSON.stringify(history));
    renderHistory();
  }

  // Render history list in sidebar
  function renderHistory() {
    const container = document.getElementById("history-list-container");
    container.innerHTML = "";
    if (history.length === 0) {
      container.innerHTML = `<div class="sidebar-empty">暂无浏览历史</div>`;
      return;
    }
    
    history.forEach(name => {
      const el = document.createElement("div");
      el.className = "sidebar-item";
      
      const termObj = weishiTerms.find(t => t.name === name);
      const displayName = isTraditional && termObj ? termObj.name_trad : name;
      
      el.innerHTML = `<span class="sidebar-item-name" style="width: 100%;">${displayName}</span>`;
      el.addEventListener("click", () => {
        window.showTermByName(name);
      });
      container.appendChild(el);
    });
  }

  function openTermInDictionary(termName) {
    const termObj = weishiTerms.find(t => 
      (t.name && t.name.toLowerCase() === termName.toLowerCase()) || 
      (t.name_trad && t.name_trad.toLowerCase() === termName.toLowerCase())
    );
    const canonicalName = termObj ? termObj.name : termName;
    window.location.hash = `dictionary?term=${encodeURIComponent(canonicalName)}`;
  }

  // Exposed globally to be accessible from handleHashChange before initialization if needed
  window.openTermInDictionaryDOM = function(canonicalName) {
    if (!weishiTerms || weishiTerms.length === 0) return;
    dictSearchInput.value = canonicalName;
    dictSearchQuery = canonicalName;
    activeAlphabet = "all";
    activeStroke = "all";
    showOnlyFavorites = false;
    searchOnlyNames = true;
    if (dictSearchOnlyNames) {
      dictSearchOnlyNames.checked = true;
    }
    
    // Reset filters visual state
    document.querySelectorAll(".btn-char").forEach(b => {
      if (b.dataset.char === "all") b.classList.add("active");
      else b.classList.remove("active");
    });
    document.querySelectorAll(".btn-stroke").forEach(b => {
      if (b.dataset.stroke === "all") b.classList.add("active");
      else b.classList.remove("active");
    });
    btnToggleFavs.classList.remove("active");
    
    filterAndRenderDict();
    
    setTimeout(() => {
      const card = document.querySelector(`.dict-card[data-term-name="${canonicalName}"]`);
      if (card) {
        expandTermCard(card, canonicalName);
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };

  window.showTermByName = function(termName) {
    openTermInDictionary(termName, true);
  };

  // Event Listeners for Dictionary Controls
  dictSearchInput.addEventListener("input", (e) => {
    dictSearchQuery = e.target.value;
    filterAndRenderDict();
  });

  if (dictSearchOnlyNames) {
    dictSearchOnlyNames.addEventListener("change", (e) => {
      searchOnlyNames = e.target.checked;
      filterAndRenderDict();
    });
  }

  btnToggleFavs.addEventListener("click", () => {
    showOnlyFavorites = !showOnlyFavorites;
    btnToggleFavs.classList.toggle("active");
    filterAndRenderDict();
  });

  btnToggleTS.addEventListener("click", () => {
    isTraditional = !isTraditional;
    btnToggleTS.classList.toggle("active");
    filterAndRenderDict();
    renderFavorites();
    renderHistory();
  });

  alphabetGroup.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-char")) {
      alphabetGroup.querySelector(".btn-char.active").classList.remove("active");
      e.target.classList.add("active");
      activeAlphabet = e.target.dataset.char;
      filterAndRenderDict();
    }
  });

  strokeGroup.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-stroke")) {
      strokeGroup.querySelector(".btn-stroke.active").classList.remove("active");
      e.target.classList.add("active");
      activeStroke = e.target.dataset.stroke;
      filterAndRenderDict();
    }
  });

  btnLoadMore.addEventListener("click", () => {
    currentOffset += RESULTS_PER_PAGE;
    const slice = displayTerms.slice(currentOffset, currentOffset + RESULTS_PER_PAGE);
    renderDictSlice(slice);
    
    if (currentOffset + RESULTS_PER_PAGE >= displayTerms.length) {
      document.getElementById("dict-load-more-container").style.display = "none";
    }
  });

  // Reference links delegation inside dictionary panel
  dictionaryPanel.addEventListener("click", (e) => {
    if (e.target.classList.contains("dict-ref-link")) {
      e.preventDefault();
      const term = e.target.dataset.term;
      window.showTermByName(term);
    }
  });

  // ==========================================
  // STUDY MODULE IMPLEMENTATION (逐卷研读)
  // ==========================================
  
  let studyData = [];
  let activeStudySec = 1;
  const studyCardsContainer = document.getElementById("study-cards-container");
  const studyCurrentLocation = document.getElementById("study-current-location");
  const studySecList = document.getElementById("study-sec-list");

  async function loadStudyData() {
    try {
      const response = await fetch(import.meta.env.BASE_URL + "data/vol1_study.json");
      studyData = await response.json();
      renderStudyCards();
    } catch (e) {
      console.error("Failed to load study data JSON:", e);
    }
  }

  function renderStudyCards() {
    if (!studyCardsContainer) return;
    studyCardsContainer.innerHTML = "";
    
    const currentSec = parseInt(activeStudySec, 10);
    const filtered = studyData.filter(item => parseInt(item.section, 10) === currentSec);
    
    filtered.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "study-card glass-card";
      card.dataset.sentenceId = item.id;
      
      const savedNote = localStorage.getItem(`filo_note_${item.id}`) || "";
      
      card.innerHTML = `
        <div class="study-card-header">
          <span class="study-card-num">Section ${activeStudySec} - #${index + 1}</span>
          <button class="btn-copy-ai" id="copy-ai-${item.id}">🤖 复制发给 AI</button>
        </div>
        <div class="study-card-body">
          <details class="study-text-block cn-block" open>
            <summary class="study-text-block-label">中文原文 (PDF: ${item.cn_page})</summary>
            <div class="study-text-block-val">${linkifyCompareText(item.cn)}</div>
          </details>
          <details class="study-text-block cook-block" open>
            <summary class="study-text-block-label">Francis H. Cook 英译本 (PDF: ${item.cook_page})</summary>
            <div class="study-text-block-val">${item.cook}</div>
          </details>
          <details class="study-text-block weitat-block" open>
            <summary class="study-text-block-label">Wei Tat 英译本 (PDF: ${item.weitat_page})</summary>
            <div class="study-text-block-val">${item.weitat}</div>
          </details>
        </div>
        <div class="study-note-section">
          <button class="study-note-toggle" id="note-toggle-${item.id}">📝 个人研读笔记</button>
          <div class="study-note-panel" id="note-panel-${item.id}">
            <textarea class="study-note-textarea" id="note-text-${item.id}" placeholder="在此记录您的研读心得、字词翻译笔记或理解疑问（修改将自动保存）...">${savedNote}</textarea>
            <div class="study-note-footer">
              <span class="study-note-status" id="note-status-${item.id}">✓ 已自动保存</span>
            </div>
          </div>
        </div>
      `;
      
      // Copy to AI
      const btnCopyAI = card.querySelector(`#copy-ai-${item.id}`);
      if (btnCopyAI) {
        btnCopyAI.addEventListener("click", () => {
          const stripHtml = (html) => {
            const tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
          };
          const text = `【《成唯识论》原文】(唐·玄奘法师译)
${stripHtml(item.cn)}

【Francis H. Cook 英译本】(Three Texts on Consciousness Only, BDK)
${stripHtml(item.cook)}

【Wei Tat 英译本】(Ch'eng Wei-Shih Lun: The Doctrine of Mere-Consciousness)
${stripHtml(item.weitat)}

---
💡 讨论指令：
基于这三个文本，请从中文唯识宗原本的逻辑出发，帮我梳理这段话的核心义理。`;
          navigator.clipboard.writeText(text).then(() => {
            btnCopyAI.innerHTML = "✅ 已复制";
            btnCopyAI.classList.add("copied");
            setTimeout(() => {
              btnCopyAI.innerHTML = "🤖 复制发给 AI";
              btnCopyAI.classList.remove("copied");
            }, 2000);
          });
        });
      }
      
      // Toggle notes visibility
      const toggleBtn = card.querySelector(`#note-toggle-${item.id}`);
      const panel = card.querySelector(`#note-panel-${item.id}`);
      
      if (savedNote) {
        toggleBtn.classList.add("expanded");
        panel.classList.add("show");
      }
      
      toggleBtn.addEventListener("click", () => {
        const isExpanded = toggleBtn.classList.toggle("expanded");
        panel.classList.toggle("show", isExpanded);
      });
      
      // Auto save on input with simple debounce
      const textarea = card.querySelector(`#note-text-${item.id}`);
      const statusLabel = card.querySelector(`#note-status-${item.id}`);
      let timeoutId = null;
      
      textarea.addEventListener("input", (e) => {
        const val = e.target.value;
        localStorage.setItem(`filo_note_${item.id}`, val);
        
        statusLabel.classList.add("show");
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          statusLabel.classList.remove("show");
        }, 1500);
      });
      
      studyCardsContainer.appendChild(card);
    });
  }

  let currentVol = "vol1";

  const volumeSections = {
    vol1: [
      { sec: 1, label: "1. 稽首颂与造论宗旨" },
      { sec: 2, label: "2. 唯识能变与假说我法" },
      { sec: 3, label: "3. 破外道我执" },
      { sec: 4, label: "4. 破小乘我执" },
      { sec: 5, label: "5. 破法执" }
    ],
    vol2: [
      { sec: 6, label: "6. 破不相应行与无为法" },
      { sec: 7, label: "7. 破法执结语与初能变相" },
      { sec: 8, label: "8. 阿赖耶识三相（自因果）" },
      { sec: 9, label: "9. 种子六义与熏习四义" },
      { sec: 10, label: "10. 四分说与五遍行心所" },
      { sec: 11, label: "11. 恒转如流与教理八证" }
    ]
  };

  function updateSidebarSections(volId) {
    if (!studySecList) return;
    currentVol = volId;
    const secs = volumeSections[volId] || [];
    studySecList.innerHTML = "";
    secs.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.className = idx === 0 ? "btn-study-sec active" : "btn-study-sec";
      btn.dataset.sec = item.sec;
      btn.textContent = item.label;
      studySecList.appendChild(btn);
    });
    if (secs.length > 0) {
      activeStudySec = secs[0].sec;
      const volTitle = volId === "vol1" ? "卷第一" : "卷第二";
      if (studyCurrentLocation) {
        studyCurrentLocation.textContent = `${volTitle} · ${secs[0].label}`;
      }
    }
  }

  // Section list button listeners
  if (studySecList) {
    studySecList.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-study-sec");
      if (btn && !btn.classList.contains("disabled")) {
        studySecList.querySelectorAll(".btn-study-sec").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeStudySec = parseInt(btn.dataset.sec, 10);
        
        // Update header location
        const volTitle = currentVol === "vol1" ? "卷第一" : "卷第二";
        if (studyCurrentLocation) {
          studyCurrentLocation.textContent = `${volTitle} · ${btn.textContent}`;
        }
        renderStudyCards();
      }
    });
  }

  // Volume Grid Menu click handler & navigation
  const studyVolumeGrid = document.getElementById("study-volume-grid");
  const studyReadingView = document.getElementById("study-reading-view");
  const btnBackToVols = document.getElementById("btn-back-to-vols");

  if (studyVolumeGrid && studyReadingView) {
    studyVolumeGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".vol-grid-card");
      if (card && card.classList.contains("active")) {
        const volId = card.dataset.vol;
        if (volId === "vol1" || volId === "vol2") {
          window.location.hash = `study/${volId}`;
        }
      }
    });

    if (btnBackToVols) {
      btnBackToVols.addEventListener("click", () => {
        window.location.hash = "study";
      });
    }
  }

  // Load and Render Baifa Data
  let baifaData = [];
  const baifaCardsContainer = document.getElementById("baifa-cards-container");

  async function loadBaifaData() {
    try {
      const res = await fetch(import.meta.env.BASE_URL + "data/baifa_study.json");
      if (res.ok) {
        baifaData = await res.json();
        renderBaifaCards();
      }
    } catch (err) {
      console.error("Failed to load baifa_study.json:", err);
    }
  }

  function renderBaifaCards() {
    if (!baifaCardsContainer) return;
    baifaCardsContainer.innerHTML = "";

    baifaData.forEach(item => {
      const card = document.createElement("div");
      card.className = "study-card glass-card";
      card.style.marginBottom = "1.5rem";

      const savedNote = localStorage.getItem(`filo_note_${item.id}`) || "";

      card.innerHTML = `
        <div class="study-card-header">
          <div>
            <span class="study-card-num" style="color: var(--accent-gold); font-size: 1.05rem;">${item.cn_title}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 10px;">${item.en_title}</span>
          </div>
          <button class="btn-copy-ai" id="copy-ai-baifa-${item.id}">🤖 复制发给 AI</button>
        </div>
        <div class="study-card-body">
          <details class="study-text-block cn-block" open>
            <summary class="study-text-block-label">玄奘大师译 颂文与名目</summary>
            <div class="study-text-block-val">${linkifyCompareText(item.cn)}</div>
          </details>
          <details class="study-text-block cook-block" open>
            <summary class="study-text-block-label">English Translation (DRBU / Heng Hsien & Master Hua)</summary>
            <div class="study-text-block-val">${item.en}</div>
          </details>
          <details class="study-text-block weitat-block" style="border-left-color: var(--accent-gold);" open>
            <summary class="study-text-block-label" style="color: var(--accent-gold);">💡 宣化上人浅释与唯识要义 (Commentary Summary)</summary>
            <div class="study-text-block-val" style="font-size: 0.92rem; line-height: 1.6;">${linkifyCompareText(item.commentary_summary)}</div>
          </details>
        </div>
        <div class="study-note-section">
          <button class="study-note-toggle" id="note-toggle-${item.id}">📝 个人研读笔记</button>
          <div class="study-note-panel" id="note-panel-${item.id}">
            <textarea class="study-note-textarea" id="note-text-${item.id}" placeholder="在此记录您的百法研读心得（自动保存）...">${savedNote}</textarea>
            <div class="study-note-footer">
              <span class="study-note-status" id="note-status-${item.id}">✓ 已自动保存</span>
            </div>
          </div>
        </div>
        
      `;

      // Copy to AI
      const btnCopyAIBaifa = card.querySelector(`#copy-ai-baifa-${item.id}`);
      if (btnCopyAIBaifa) {
        btnCopyAIBaifa.addEventListener("click", () => {
          const stripHtml = (html) => {
            const tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
          };
          const text = `【《大乘百法明门论》原文】(世亲菩萨造，唐·玄奘法师译)
${stripHtml(item.cn)}

【百法明门论英译本】(Shastra on the Door to Understanding the Hundred Dharmas, DRBU / Heng Hsien)
${stripHtml(item.en)}

【宣化上人浅释与唯识要义】(A General Explanation of the Shastra on the Door to Understanding the Hundred Dharmas)
${stripHtml(item.commentary_summary)}

---
💡 讨论指令：
基于这三个文本，请从中文唯识宗原本的逻辑出发，帮我梳理这段话的核心义理。`;
          navigator.clipboard.writeText(text).then(() => {
            btnCopyAIBaifa.innerHTML = "✅ 已复制";
            btnCopyAIBaifa.classList.add("copied");
            setTimeout(() => {
              btnCopyAIBaifa.innerHTML = "🤖 复制发给 AI";
              btnCopyAIBaifa.classList.remove("copied");
            }, 2000);
          });
        });
      }

      // Toggle notes visibility
      const toggleBtn = card.querySelector(`#note-toggle-${item.id}`);
      const panel = card.querySelector(`#note-panel-${item.id}`);
      if (savedNote) {
        toggleBtn.classList.add("expanded");
        panel.classList.add("show");
      }
      toggleBtn.addEventListener("click", () => {
        const isExpanded = toggleBtn.classList.toggle("expanded");
        panel.classList.toggle("show", isExpanded);
      });

      // Auto save
      const textarea = card.querySelector(`#note-text-${item.id}`);
      const statusLabel = card.querySelector(`#note-status-${item.id}`);
      let timeoutId = null;
      textarea.addEventListener("input", (e) => {
        localStorage.setItem(`filo_note_${item.id}`, e.target.value);
        statusLabel.classList.add("show");
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => statusLabel.classList.remove("show"), 1500);
      });

      baifaCardsContainer.appendChild(card);
    });
  }

  // Kick off the load
  Promise.all([
    loadDictionary(),
    loadStudyData(),
    loadBaifaData()
  ]).then(() => {
    handleHashChange();
  });
});
