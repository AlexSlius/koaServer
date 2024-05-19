const { models } = require('../db/models');

const getUserByLogin = async (login) => {
    return await models.user.findOne({
        where: { login },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
}

const getUsers = async () => {
    return await models.user.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
        include: [
            {
                model: models.role,
                attributes: ['id', 'name']
            },
            {
                model: models.city,
                attributes: ['id', 'name']
            }
        ]
    });
}

const getOneById = async (id) => {
    return await models.user.findOne({
        where: { id },
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
    })
}

const createUser = async (data) => {
    return await models.user.create(data);
}

const deleteUserById = async (id) => {
    return await models.user.destroy({ where: { id } });
}

module.exports = {
    getUserByLogin,
    getUsers,
    getOneById,
    createUser,
    deleteUserById
}