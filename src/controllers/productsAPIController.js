const products = require("../models/products.js");

const productById = (req, res) => {
    products.findByPk(req.params.id).then(product => {
        return res.send(product);
    }).catch(error => {
        console.log(error);
    })
};
  
module.exports = { productById };