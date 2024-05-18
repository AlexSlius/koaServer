const user = require('./user');
const role = require('./role');
const city = require('./city');

const models = {
    user,
    role,
    city
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.role.hasMany(models.user, { foreignKey: 'roleId' });
models.user.belongsTo(models.role);

models.city.hasMany(models.user, { foreignKey: 'cityId' });
models.user.belongsTo(models.city);

module.exports = { models };
