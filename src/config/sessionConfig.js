const session = require("express-session");
const mySecret = process.env.SESSION_SECRET;

const sessionConfig = {
  name: "userSession",
  secret: mySecret,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

module.exports = sessionConfig;
