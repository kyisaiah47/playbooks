const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const icoPath = path.join(__dirname, '../public/favicon.ico');

  console.log('Generating favicon.ico from favicon.svg...');

  try {
    // Generate a 32x32 PNG (ICO format with multiple sizes would be ideal, but PNG works for most browsers)
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(icoPath.replace('.ico', '-32.png'));

    // Generate 16x16
    await sharp(svgPath)
      .resize(16, 16)
      .png()
      .toFile(icoPath.replace('.ico', '-16.png'));

    console.log('✓ Generated favicon-16.png and favicon-32.png');
    console.log('✓ Note: For true .ico support with multiple sizes, use an online converter or ImageMagick');
    console.log('✓ These PNG files will work as fallbacks for most browsers');

  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
