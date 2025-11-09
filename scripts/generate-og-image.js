const sharp = require('sharp');
const path = require('path');

async function generateOGImage() {
  const svgPath = path.join(__dirname, '../public/og-image.svg');
  const pngPath = path.join(__dirname, '../public/og-image.png');

  console.log('Generating og-image.png from og-image.svg...');

  try {
    await sharp(svgPath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(pngPath);

    console.log('✓ Generated og-image.png (1200x630)');
    console.log('✓ File location:', pngPath);

  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
