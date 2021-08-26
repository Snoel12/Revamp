const Sequelize = require("sequelize");
const { STRING, BOOLEAN } = Sequelize;
const db = require("../db");

const Goal = db.define("goal", {
  inProgress: {
    type: BOOLEAN,
    defaultValue: true,
  },
  name: {
    type: STRING,
  },
});

module.exports = Goal;
