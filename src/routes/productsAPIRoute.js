const express = require("express");
const router = express.Router();

const { productById } = require("../controllers/productsAPIController");

router.get("/product/:id", productById);

module.exports = router;
