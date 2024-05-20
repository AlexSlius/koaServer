const { schemaCity } = require('./schemes/city');
const { errorHandling } = require("../utils/validation");

const validateCity = ({ data }) => {
    return errorHandling(schemaCity.validate(data));
}

module.exports = {
    validateCity
}