const bcryptjs = require("bcryptjs");

const hasPassword = async (password) => {
    let salt = await bcryptjs.genSalt(+process.env.SALT_ROUNDS_LINGTH);
    return bcryptjs.hash(password, salt);
}

const compareHasPassword = async ({ password, hashDb }) => {
    return bcryptjs.compare(password, hashDb);
}

module.exports = {
    hasPassword,
    compareHasPassword
}