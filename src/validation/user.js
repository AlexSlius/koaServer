const { errorHandling } = require("../utils/validation");
const { schemaCreateUser } = require("./schemes/user");

const validateCreateUser = ({ data }) => {
    return errorHandling(schemaCreateUser.validate(data));
}

module.exports = {
    validateCreateUser
}