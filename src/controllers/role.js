const { getAll, add, deleteById } = require('../services/role');

class Role {
    async getAll(ctx) {
        const data = await getAll();
    }

    async add(ctx) {
        const data = await add();
    }

    async remove(ctx) {
        const data = await deleteById(ctx.marams.id);
    }
}

module.exports = new Role();