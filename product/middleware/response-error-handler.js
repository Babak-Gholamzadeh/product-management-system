module.exports = (err, req, res, next) => {
  let {
    response = { data: 'Internal Server Error' },
    statusCode = 500
  } = err;

  if (err.code === 11000) {
    statusCode = 400;
    response.data = `duplicate key error collection: ${Object.keys(err.keyValue)}`;
  }
  else if (err.code === 66) {
    statusCode = 400;
    response.data = `update an immutable field`;
  }
  else if(err.constructor.name === 'ValidationError' && err.errors) {
    statusCode = 400;
    response.data = `validation error: ${Object.entries(err.errors).map(([key, value]) => value).join(', ')}`;
  }
  else if(err.constructor.name === 'CastError') {
    statusCode = 400;
    response.data = `bad request`;
  }

  res.status(statusCode).json({ success: false, ...response });
};
