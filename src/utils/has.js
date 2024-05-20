const crypto = require("crypto");

const renerateKey = (text) => crypto.createHash('md5').update(text).digest('hex');

module.exports = {
    renerateKey
}