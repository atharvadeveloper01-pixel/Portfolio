const fs = require('fs');
const path = require('path');

// 1x1 transparent WebP image (Base64)
const base64WebP = 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
const imageBuffer = Buffer.from(base64WebP, 'base64');

const projects = ['taskflow', 'amazing-wallpapers', 'mood-mesh'];

const structure = {
  '': ['cover.webp', 'hero.webp', 'thumbnail.webp'],
  'screens': [
    // taskflow
    'login.webp', 'dashboard.webp', 'tasks.webp', 'add.webp', 'profile.webp',
    // amazing-wallpapers
    'discover.webp', 'browse.webp', 'preview.webp', 'favorites.webp',
    // mood-mesh
    'menu.webp', 'game.webp', 'result.webp'
  ],
  'gallery': [
    '01.webp', '02.webp', '03.webp', '04.webp'
  ]
};

const baseDir = path.join(__dirname, 'public', 'projects');

projects.forEach(project => {
  Object.entries(structure).forEach(([subDir, files]) => {
    const dirPath = path.join(baseDir, project, subDir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, imageBuffer);
      }
    });
  });
});

console.log('Placeholders created successfully.');
