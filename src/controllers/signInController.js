const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const Users = require("../models/users.js");

const logInView = (req, res) => {
  //const { firstname, lastname, email, password } = req.body;
  res.render("signIn.ejs");
};

const createUser = async (req, res) => {
  console.log(req.body);
  const userData = ({ firstname, lastname, email, password } = req.body);

  const userWithSameEmail = await Users.findOne({ where: { email } });
  if (userWithSameEmail) {
    // Si se encuentra un usuario con el mismo email, enviar un mensaje de error
    return res.status(409).json({ error: "Email already exists" });
  }

  // Encriptar la contraseña usando bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  // // Guardar el usuario en la base de datos
  const create = await Users.create({
    user_name: req.body.firstname,
    user_lastname: req.body.lastname,
    email: req.body.email,
    user_password: hashedPassword,
  });
  if (create) {
    return res.render("successlogin.ejs", { userData: userData });
  } else {
    return res.render("signIn.ejs");
  }
};

module.exports = { logInView, createUser };
// .then((Users) => {
//   return res.render("successlogin.ejs", { userData: Users });
// })
// .else((err) => {
//   res.console.log("not added residters");
//   res.render("login.ejs", err);
// });
