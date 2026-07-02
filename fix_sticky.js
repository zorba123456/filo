const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');
if (css.includes('@media (max-width: 768px) {')) {
  css = css.replace('.nav-tab-item {', '.study-sidebar { position: static; margin-bottom: 1rem; }\n\n  .nav-tab-item {');
  fs.writeFileSync('src/style.css', css);
  console.log('Fixed sticky sidebar for mobile');
}
