const { Model, DataTypes } = require("sequelize");

const db = require("../index");

class City extends Model {}

const model = City.init({
  name: DataTypes.STRING,
  key: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'city',
});

module.exports = model;