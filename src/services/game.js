const { models } = require('../db/models');

const add = async (data) => {
    return await models.game.create(data);
}

const updateById = async ({ id, data }) => {
    return await models.game.update(data, { where: { id } });
}

const deleteById = async (id) => {
    return await models.game.destroy({ where: { id } });
}

const getById = async (id) => {
    return await models.game.findOne({ where: { id } });
}

const getAll = async ({ offset, limit }) => {
    return await models.game.findAndCountAll({
        offset: offset,
        limit: limit
    });
}

module.exports = {
    add,
    updateById,
    deleteById,
    getById,
    getAll
}