const Sequelize = require("sequelize");
const { STRING, BOOLEAN } = Sequelize;
const db = require("../db");

const Goal = db.define("goal", {
  name: {
    type: STRING,
  },
});

module.exports = Goal;
