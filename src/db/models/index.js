import fs from "fs/promises";
import { dirname } from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from 'url';

import { congifDB } from "../../../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const db = {};

const sequelize = new Sequelize(congifDB());

fs.readdir(__dirname)
    .then(files => {
        files.filter(file => (
            file.indexOf('.') !== 0 &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1 &&
            file.indexOf('index.js') === -1
        ))
            .forEach(async fileName => {
                let modelImport = await import(`./${fileName}`);
                let model = modelImport.default(sequelize, DataTypes);
                db[model.name] = model;
            });
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
