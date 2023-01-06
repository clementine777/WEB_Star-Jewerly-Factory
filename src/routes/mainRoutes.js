const express = require("express");
const {
  loadAllPorducts,
  selectIdProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/mainController.js");
//const cors = require("cors");

const router = express.Router();

router.get("/", loadAllPorducts);

router.get("/:id", selectIdProducts);

router.post("/:id", addProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;
