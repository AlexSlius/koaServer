const { transliterate } = require('transliteration');

const transliteratedText = (text) => transliterate(text);

module.exports = {
    transliteratedText
}