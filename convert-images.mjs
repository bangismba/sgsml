
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images/projects';

async function convertImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(inputDir, outputName);

    await sharp(inputPath)
      .resize({
        width: 1200,
        height: 800,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Converted: ${file} → ${outputName}`);
  }

  console.log('All images converted successfully!');
}

convertImages().catch(console.error);
