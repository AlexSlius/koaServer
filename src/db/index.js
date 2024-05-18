const { Sequelize } = require("sequelize");

const congifDB = require("../../config/database.js");

const sequelize = new Sequelize(congifDB());

module.exports = sequelize