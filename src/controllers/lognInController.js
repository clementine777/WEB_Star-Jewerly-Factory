const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const Users = require("../models/users.js");
const session = require("../config/sessionConfig.js");

const logInView = (req, res) => {
  res.render("logIn.ejs");
};

const compareUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  console.log(user);
  if (!user) {
    res.render("logIn.ejs", { error: "the password or email is incorrect " });
  }
  if (user) {
    passwordIsValid = await bcrypt.compare(password, user.user_password);
  }
  //console.error("contraseña invalida");
  if (passwordIsValid) {
    req.session.user = session;
    // req.body.firstname = username;
    // req.session.username = user.firstname;

    res.cookie("cookieUser", req.session.user, {
      expires: new Date(Date.now() + 604800),
      httpOnly: true,
    });

    res.redirect("/home");
  } else {
    res.render("logIn.ejs", { error: "the password or email is incorrect " });
  }
};
module.exports = { logInView, compareUser };
