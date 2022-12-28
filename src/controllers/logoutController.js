const cookieDestroy = (req, res) => {
  req.session.destroy();
  if (req.cookies.cookieUser) {
    res.cookie("cookieUser", "", { maxAge: -1 });
  }

  res.redirect("/home");
};

module.exports = cookieDestroy;
