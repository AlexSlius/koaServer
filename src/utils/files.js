const fs = require('fs');
const { join, extname } = require('path');

const saveFileOne = (file) => {
    const reader = fs.createReadStream(file.filepath);
    const outputDir = join(__dirname, '../../storage');
    const fileExtension = extname(file.originalFilename);
    const newNameFile = `${file.newFilename}${fileExtension}`;
    const outputFilePath = join(outputDir, newNameFile);
    const stream = fs.createWriteStream(outputFilePath);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    reader.pipe(stream);

    return newNameFile;
}

module.exports = {
    saveFileOne
}