const dotenv = require('dotenv');

dotenv.config();

const env = process.env;

const congifDB = () => ({
  username: env['DB_USER_NAME'],
  password: env['DB_PASSWORD'],
  database: env['DB_DATA_BASE'],
  host: env['DB_HOST'],
  port: env['DB_PORT'],
  dialect: env['DB_DIALECT']
})

module.exports = congifDB;