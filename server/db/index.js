//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Category = require("./models/Category");
const Habit = require("./models/Habit");
const Quote = require("./models/Quote");

//associations could go here!
User.hasMany(Category);
Category.belongsTo(User);

Category.hasMany(Habit);
Habit.belongsTo(Category);

module.exports = {
  db,
  models: {
    User,
    Category,
    Habit,
    Quote,
  },
};
