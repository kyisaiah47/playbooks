const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/favicon.svg');
  const outputDir = path.join(__dirname, '../public');

  // Generate favicon.ico (32x32)
  await sharp(inputPath)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon.ico'));

  // Generate favicon-16.png
  await sharp(inputPath)
    .resize(16, 16)
    .toFile(path.join(outputDir, 'favicon-16.png'));

  // Generate favicon-32.png
  await sharp(inputPath)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon-32.png'));

  console.log('✅ Generated all favicons from favicon.svg');
}

generateFavicon().catch(console.error);
