const { Model, DataTypes } = require('sequelize');

const db = require("../index");

class Game extends Model { };

const model = Game.init({
  name: DataTypes.STRING,
  key: DataTypes.STRING,
  cityId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  image: DataTypes.STRING,
  description: DataTypes.STRING,
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize: db,
  modelName: 'game',
});

module.exports = model;
