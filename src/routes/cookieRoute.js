const express = require("express");
const router = express.Router();
const logOut = require("../controllers/logoutController");

router.get("/cookie", logOut);

module.exports = router;
