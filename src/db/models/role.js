const { Model, DataTypes } = require("sequelize");

const user = require('./user');

const db = require("../index");

class Role extends Model {
}

const model = Role.init({
  name: DataTypes.STRING,
  keyName: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'role',
});

module.exports = model;