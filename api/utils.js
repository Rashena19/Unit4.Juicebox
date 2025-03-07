function requireUser(req, res, next) {
  if (!req.User) {
    return res.status(401).json({ message: "Login Required."})
  }
  next();
};

module.exports = {
  requireUser
};