//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Goal = require("./models/Goal");
const Habit = require("./models/Habit");
const Quote = require("./models/Quote");

//associations could go here!
User.hasMany(Goal);
Goal.belongsTo(User);

Goal.hasMany(Habit);
Habit.belongsTo(Goal);

module.exports = {
  db,
  models: {
    User,
    Goal,
    Habit,
    Quote,
  },
};
