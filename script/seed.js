"use strict";

const {
  db,
  models: { User, Goal, Habit, Quote, Category },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Uno",
      email: "cody@google.com",
    }),
    User.create({
      username: "zack",
      password: "123",
      firstName: "Zack",
      lastName: "Thres",
      email: "zack@google.com",
    }),
  ]);

  const [fitness, school] = await Promise.all([
    Goal.create({ userId: users[0].id, name: "fitness" }),
    Goal.create({ userId: users[0].id, name: "school" }),
  ]);

  const [run, gym, study, review] = await Promise.all([
    Habit.create({
      frequency: "daily",
      repetitions: 1,
      duration: 20,
      name: "running",
      goalId: fitness.id,
    }),
    Habit.create({
      frequency: "weekly",
      repetitions: 4,
      duration: 120,
      name: "gym",
      goalId: fitness.id,
    }),
    Habit.create({
      frequency: "daily",
      repetitions: 2,
      duration: 60,
      name: "study",
      goalId: school.id,
    }),
    Habit.create({
      frequency: "weekly",
      repetitions: 3,
      duration: 60,
      name: "review",
      goalId: school.id,
    }),
  ]);

  const [one, two, three, four] = await Promise.all([
    Quote.create({
      text: "Make the most of yourself…. for that is all there is of you.",
      author: "Ralph Waldo Emerson",
    }),
    Quote.create({
      text: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    }),
    Quote.create({
      text: "If we don’t change, we don’t grow. If we don’t grow, we aren’t really living.",
      author: "Gail Sheehy",
    }),
    Quote.create({
      text: "When we strive to become better than we are, everything around us becomes better too.",
      author: "Paulo Coelho",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
