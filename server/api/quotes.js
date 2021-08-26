const router = require("express").Router();
const {
  models: { User, Quote },
} = require("../db");
module.exports = router;

//get routes

router.get("/", async (req, res, next) => {
  try {
    const quotes = await Quote.findAll();
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

//post route

router.post("/", async (req, res) => {
  res.status(201).send(await quote.create(req.body));
  console.log("success");
});

//put route

router.put("/:id", async (req, res, next) => {
  try {
    const Quote = await Quote.findByPk(req.params.id);
    await Quote.update(req.body);
    res.send(Quote);
  } catch (err) {
    next(err);
  }
});

//delete routes

router.delete("/:id", async (req, res) => {
  const quote = await Quote.findByPk(req.params.id);
  await quote.destroy();
  res.send(quote);
});
