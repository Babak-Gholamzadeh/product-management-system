const router = require('express').Router();
const companies = require('./companies');
const responseStateHandler = require('../middleware/response-state-handler');
const responseErrorHandler = require('../middleware/response-error-handler');

router.use(
  '/companies',
  responseStateHandler,
  companies,
  responseErrorHandler
);

module.exports = router;
