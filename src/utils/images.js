const substitutePicturePath = (nameImg) => {
    return `${process.env.DOMAIN}/${nameImg}`;
}

module.exports = {
    substitutePicturePath
}