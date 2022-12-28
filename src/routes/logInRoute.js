const express = require("express");
const { logInView, compareUser } = require("../controllers/lognInController");
const router = express.Router();
const cookie = require("../middleware/cookieCheck");
const session = require("../middleware/sessionCheck");
//middleware de cookies y mantener session
router.get("/logIn", cookie, logInView);

router.post("/logIn", cookie, compareUser);

module.exports = router;
