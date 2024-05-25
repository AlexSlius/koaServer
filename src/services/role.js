const { models } = require('../db/models');

const getAll = async () => {
    return await models.role.findAll();
}

const add = async (data) => {
    return await models.role.create(data);
}

const deleteById = async (id) => {
    return await models.role.destroy({ where: { id } });
}

module.exports = {
    getAll,
    add,
    deleteById
}