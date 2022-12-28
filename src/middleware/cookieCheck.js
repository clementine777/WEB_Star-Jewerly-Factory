module.exports = (req, res, next) => {
  if (req.cookies.cookieUser) {
    req.session.user = req.cookies.cookieUser;
  }
  next();
};
