const { transliteratedText } = require("./transliteration");

const keyGame = (name) => {
    let nameTranslit = transliteratedText(name.replace(/\s+/g, ''));

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const seconds = currentDate.getSeconds();

    return `${nameTranslit}${month}${day}${seconds}`
}

module.exports = {
    keyGame
}