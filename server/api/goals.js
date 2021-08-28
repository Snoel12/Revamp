const router = require("express").Router();
const {
  models: { User, Goal, Habit },
} = require("../db");
module.exports = router;

//get routes

router.get("/:id", async (req, res, next) => {
  try {
    const goals = await Goal.findAll({
      where: {
        id: req.params.id,
      },
      include: Habit,
    });
    res.json(goals);
  } catch (err) {
    next(err);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const goals = await Goal.findAll({
      where: {
        userId: req.params.id,
      },
      include: Habit,
    });
    res.json(goals);
  } catch (err) {
    next(err);
  }
});

//post route

router.post("/", async (req, res) => {
  res.status(201).send(await Goal.create(req.body));
  console.log("success");
});

//put route

router.put("/:id", async (req, res, next) => {
  try {
    const goal = await Goal.findByPk(req.params.id);
    await goal.update(req.body);
    res.send(goal);
  } catch (err) {
    next(err);
  }
});

//delete routes

router.delete("/:id", async (req, res) => {
  const goal = await Goal.findByPk(req.params.id);
  await goal.destroy();
  res.send(goal);
});
