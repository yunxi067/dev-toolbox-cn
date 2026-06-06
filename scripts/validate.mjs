import fs from 'node:fs';

const requiredFiles = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'docs/roadmap.md',
  'docs/tool-matrix.md',
  'docs/release-playbook.md',
  'assets/hero.svg'
];

const requiredReadmeMarkers = [
  'README Doctor',
  'Windows Dev Doctor',
  'https://github.com/yunxi067/readme-doctor',
  'https://github.com/yunxi067/windows-dev-doctor',
  'npx @yunxi067/readme-doctor',
  'npx @yunxi067/windows-dev-doctor',
  'docs/roadmap.md'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const readme = fs.readFileSync('README.md', 'utf8');
for (const marker of requiredReadmeMarkers) {
  if (!readme.includes(marker)) {
    throw new Error(`README missing marker: ${marker}`);
  }
}

console.log('dev-toolbox-cn docs check passed');

