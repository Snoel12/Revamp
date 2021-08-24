const Sequelize = require("sequelize");
const { STRING, INTEGER, ENUM } = Sequelize;
const db = require("../db");

const Habit = db.define("habit", {
  frequency: {
    type: STRING,
    allowNull: false,
  },
  repetitions: {
    type: INTEGER,
  },
  duration: {
    type: INTEGER,
  },
});

module.exports = Habit;
