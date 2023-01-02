const express = require("express");
const router = express.Router();
const cart = require("../controllers/cartController");
const cookie = require("../middleware/cookieCheck");
const session = require("../middleware/sessionCheck");

router.get("/404", cookie, (req, res) => {
  res.render("notFound.ejs");
});

module.exports = router;
