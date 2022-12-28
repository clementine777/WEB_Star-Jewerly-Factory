const express = require("express");
const home = require("../controllers/homeController.js");
const router = express.Router();
const cookie = require("../middleware/cookieCheck");
router.get("/home", cookie, home.homeView);
//router.get("/product/:id", home.productView);
router.get("/", cookie, home.homeView);
// router.post();
// router.delete();
// router.put();

// console.log(homeRoute);

module.exports = router;
