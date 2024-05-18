const { models } = require('../db/models');

const getUserByLogin = async (login) => {
    return await models.user.findOne({
        where: { login },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
}

module.exports = {
    getUserByLogin
}