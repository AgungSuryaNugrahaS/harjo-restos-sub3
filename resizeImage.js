const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');

(async () => {
  const target = path.resolve(__dirname, 'src/public/images');
  const destination = path.resolve(__dirname, 'dist/images');

  const destinationIsExist = await fs.exists('dist/images');

  if (!destinationIsExist) {
    fs.mkdir(destination);
  }

  const readDir = await fs.readdir(target);

  console.log(readDir);

  readDir.forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
})();
