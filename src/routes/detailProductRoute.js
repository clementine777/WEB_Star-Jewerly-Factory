const express = require("express");
const router = express.Router();
const detailProduct = require("../controllers/detailProductController");
const cookie = require("../middleware/cookieCheck");
router.get("/detailProduct/:id", cookie, detailProduct);

module.exports = router;
