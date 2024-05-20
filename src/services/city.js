const { models } = require('../db/models');

const getAll = async () => {
    return await models.city.findAll();
}

const add = async (data) => {
    return await models.city.create(data);
}

const deleteById = async (id) => {
    return await models.city.destroy({ where: { id } });
}

module.exports = {
    getAll,
    add,
    deleteById
}