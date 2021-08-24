const Sequelize = require("sequelize");
const { STRING, BOOLEAN } = Sequelize;
const db = require("../db");

const Category = db.define("category", {
  inProgress: {
    type: BOOLEAN,
  },
});

module.exports = Category;
