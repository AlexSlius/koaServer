const { Model, DataTypes } = require("sequelize");

const db = require("../index");

class City extends Model {
}

const model = City.init({
  name: DataTypes.STRING,
  key: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'city',
});

// City.hasMany(User(sequelize, DataTypes), { foreignKey: 'cityId' });
// User(sequelize, DataTypes).belongsTo(City);

module.exports = model;