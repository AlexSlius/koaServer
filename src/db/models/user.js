const { Model, DataTypes } = require("sequelize");

const db = require("../index");

class User extends Model {
}

const model = User.init({
  name: DataTypes.STRING,
  login: DataTypes.STRING,
  password: DataTypes.STRING,
  roleId: {
    type: DataTypes.INTEGER,
  },
  cityId: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize: db,
  modelName: 'user',
});

module.exports = model;
