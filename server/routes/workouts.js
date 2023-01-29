const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "welcome to the app!" });
});

module.exports = router;
