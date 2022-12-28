const express = require("express");
const router = express.Router();
const cart = require("../controllers/cartController");
const cookie = require("../middleware/cookieCheck");
const session = require("../middleware/sessionCheck");

router.get("/cart", cookie, session, cart);

module.exports = router;
