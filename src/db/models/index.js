const user = require('./user');
const role = require('./role');
const city = require('./city');
const game = require('./game');

const models = {
    user,
    role,
    city,
    game
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

// role
models.role.hasMany(models.user, { foreignKey: 'roleId' });
models.user.belongsTo(models.role);

// city
models.city.hasMany(models.user, { foreignKey: 'cityId' });
models.user.belongsTo(models.city);

// game
models.city.hasMany(models.game, { foreignKey: 'cityId' });
models.game.belongsTo(models.city);
models.user.hasMany(models.game, { foreignKey: 'userId' });
models.game.belongsTo(models.user);

module.exports = { models };
