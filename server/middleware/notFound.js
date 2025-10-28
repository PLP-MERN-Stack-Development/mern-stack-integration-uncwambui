module.exports = (req, res, next) => {
  res.status(404);
  const err = new Error(`Not Found - ${req.originalUrl}`);
  next(err);
};
