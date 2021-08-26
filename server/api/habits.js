const router = require("express").Router();
const {
  models: { User, Goal, Habit },
} = require("../db");
module.exports = router;

//get route

router.get("/", async (req, res, next) => {
  try {
    const habits = await Habit.findAll({});
    res.json(habits);
  } catch (err) {
    next(err);
  }
});

//post route

router.post("/", async (req, res) => {
  res.status(201).send(await Habit.create(req.body));
  console.log("success");
});

//put route

router.put("/:id", async (req, res, next) => {
  try {
    const habit = await Habit.findByPk(req.params.id);
    await habit.update(req.body);
    res.send(habit);
  } catch (err) {
    next(err);
  }
});

//delete routes

router.delete("/:id", async (req, res) => {
  const habit = await Habit.findByPk(req.params.id);
  await habit.destroy();
  res.send(habit);
});
