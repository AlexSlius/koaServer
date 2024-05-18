const { errorHandling } = require("../utils/validation");
const { schemaLogin } = require("./schemes/auth");

const validateAuthLogin = ({ data }) => {
    return errorHandling(schemaLogin.validate(data));
}

module.exports = {
    validateAuthLogin
}