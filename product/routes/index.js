const router = require('express').Router();
const products = require('./products');
const responseStateHandler = require('../middleware/response-state-handler');
const responseErrorHandler = require('../middleware/response-error-handler');

router.use(
  '/products',
  responseStateHandler,
  products,
  responseErrorHandler
);

module.exports = router;
