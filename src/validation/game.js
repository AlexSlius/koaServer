const { schemaCreateGame, schemaUpdateGame } = require('./schemes/game');
const { errorHandling } = require("../utils/validation");

const validateCreateGame = ({ data }) => {
    return errorHandling(schemaCreateGame.validate(data));
}

const validateUpdateGame = ({ data }) => {
    return errorHandling(schemaUpdateGame.validate(data));
}

module.exports = {
    validateCreateGame,
    validateUpdateGame
}