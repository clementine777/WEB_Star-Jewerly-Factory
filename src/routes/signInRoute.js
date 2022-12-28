const express = require("express");
//const { succesLogin } = require("../controllers/logInController");
const signIn = require("../controllers/signInController");
const validateForm = require("../middleware/validator/loginValidator");
//const encryptPostForm = require("../middleware/loginEcryptPassword");
const router = express.Router();
//const session = require("express-session");
const cookie = require("../middleware/cookieCheck");

router.get("/signIn", cookie, signIn.logInView);
router.post("/signIn", cookie, validateForm(), signIn.createUser);
router.get("/session", cookie, (req, res) => {
  return res.json(req.session);
});

module.exports = router;
