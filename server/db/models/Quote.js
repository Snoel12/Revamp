const Sequelize = require("sequelize");
const { STRING, INTEGER, ENUM, TEXT } = Sequelize;
const db = require("../db");

const Quote = db.define("quote", {
  text: {
    type: TEXT,
  },
  author: {
    type: STRING,
  },
});

module.exports = Quote;
