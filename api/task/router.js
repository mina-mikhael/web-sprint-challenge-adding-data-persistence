// build your `/api/tasks` router here
const router = require("express").Router();
const { getAll, create } = require("./model");

router.get("/", (req, res, next) => {
  getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  create(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: "there was an error", message: err.message, stack: err.stack });
});

module.exports = router;
