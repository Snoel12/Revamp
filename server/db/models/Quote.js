const Sequelize = require("sequelize");
const { STRING, INTEGER, ENUM, TEXT } = Sequelize;
const db = require("../db");

const Quote = db.define("quote", {
  text: {
    type: TEXT,
  },
});

module.exports = Quote;
