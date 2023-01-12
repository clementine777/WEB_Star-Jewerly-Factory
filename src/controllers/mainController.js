//const { where } = require("sequelize");
//const { sequelize, products } = require("../models/products"); EL ERROR MAS LOCO SOLO LA DESESTRUCTURACION CUSABA EL ERROR NO SE POR QUE

const products = require("../models/products.js");
const Users = require("../models/users.js");
const dash_user = require("../models/dashboard_user.js");

//consulata toda la tabala
const loadAllPorducts = (req, res) => {
  products
    .findAll()
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

//consulta de a uno con  por primary key
const selectIdProducts = (req, res) => {
  products
    .findByPk(req.params.id)
    .then((product) => {
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

//crea un nuevo producto en la DB
const addProduct = async (req, res) => {
  const newProduct = await products.create({
    product_name: req.body.product_name,
    price: req.body.price,
    product_description: req.body.product_description,
    stock: req.body.stock,
    weight: req.body.weight,
    material: req.body.material,
    product_type: req.body.product_type,
    pic: req.body.pic,
  });
  if (newProduct) {
    return res.send(newProduct);
  } else {
    return res.status(404).send({ message: "Product not created" });
  }
};

//elimina un proucto de la DB
const deleteProduct = async function deleteProduct(req, res) {
  try {
    const product = await products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    await product.destroy();
    return res.send({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//modifica productos ya creados en la DB

const updateProduct = async function updateProduct(req, res) {
  try {
    const product = await products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    const updatedProduct = await product.update(req.body);
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//LOGIN DE ANGULAR!!!!!!
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const dash_user = await dash_user.findOne({ where: { email } });
  console.log(dash_user);
  if (!dash_user) {
    res.status(401).json({ message: "Email or password incorrect" });
  } else {
    // verifica el password o eso creo
    if (dash_user.password === password) {
      res
        .status(200)
        .json({ message: "Login successful", dash_user: dash_user });
    } else {
      res.status(401).json({ message: "Email or password incorrect" });
    }
  }
};

module.exports = {
  loginUser,
  loadAllPorducts,
  selectIdProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
