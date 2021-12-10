const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    "where": "on the auth'/login route",
  });
});

router.post("/signup", (req, res) => {
  res.json({
    "where": "on the auth'/signup route",
  });
});

module.exports = router;
