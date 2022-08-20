// build your `/api/projects` router here
const router = require("express").Router();
const { getAll, create } = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await create(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: "there was an error", message: err.message, stack: err.stack });
});

module.exports = router;
