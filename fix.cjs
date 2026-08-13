const fs = require('fs');

function removeUnused(file, unused) {
  let content = fs.readFileSync(file, 'utf8');
  for (const u of unused) {
    if (u === 'React') {
      content = content.replace(/import\s+React\s+from\s+['"]react['"];?\n?/, '');
    } else {
      content = content.replace(new RegExp(u + '\\s*,?\\s*'), '');
    }
  }
  fs.writeFileSync(file, content);
}

removeUnused('src/App.tsx', ['React']);
removeUnused('src/components/layout/Footer.tsx', ['React']);
removeUnused('src/components/layout/Header.tsx', ['React']);
removeUnused('src/components/ui/FloatingWhatsAppButton.tsx', ['React']);
removeUnused('src/pages/About.tsx', ['React', 'FeatureCard']);
removeUnused('src/pages/Home.tsx', ['React', 'StatCard', 'ChevronRight']);
removeUnused('src/pages/Products.tsx', ['React', 'ChevronDown']);

// Fix FeatureCard style prop
let cards = fs.readFileSync('src/components/ui/Cards.tsx', 'utf8');
cards = cards.replace(
  /className\?: string;\n\s*\}/,
  'className?: string;\n  style?: React.CSSProperties;\n}'
);
cards = cards.replace(
  /className\n\s*\)/,
  'className,\n      style\n    )'
);
cards = cards.replace(
  /<div\n\s*className=\{cn\(/,
  '<div\n    style={style}\n    className={cn('
);
fs.writeFileSync('src/components/ui/Cards.tsx', cards);

console.log('Fixes applied');
