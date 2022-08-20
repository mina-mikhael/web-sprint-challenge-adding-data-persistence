// build your `/api/tasks` router here
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "inside tasks router" });
});

module.exports = router;
