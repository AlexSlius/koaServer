const { schemaRole } = require('./schemes/role');
const { errorHandling } = require("../utils/validation");

const validateRole = ({ data }) => {
    return errorHandling(schemaRole.validate(data));
}

module.exports = {
    validateRole
}