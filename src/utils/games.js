const { substitutePicturePath } = require("./images");

const sortingGamesAndReplacingPictures = (games) => {
    if (!games)
        return null;

    return games.map(itemGame => {
        const gameJson = itemGame.toJSON();

        return { ...gameJson, image: substitutePicturePath(gameJson.image) }
    });
}

module.exports = {
    sortingGamesAndReplacingPictures
}