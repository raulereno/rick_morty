require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname + "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file.slice(-3) === ".js" && file !== basename
  )
  .forEach((model) => {
    modelDefiners.push(require(path.join(__dirname + "/models/" + model)));
  });

modelDefiners.forEach((model) => model(sequelize));

const { Location } = sequelize.models;
const { Character } = sequelize.models;

Location.hasMany(Character);
Character.belongsTo(Location);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
