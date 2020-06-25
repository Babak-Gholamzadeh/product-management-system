module.exports = (req, res, next) => {
  const responseStateHandler = {
    fail: (data, statusCode = 500) =>
      next({ response: { data }, statusCode }),
    success: (data, statusCode = 200) =>
      res.status(statusCode).json({ success: true, ...data }),
  };
  Object.assign(res, responseStateHandler);
  next();
};
