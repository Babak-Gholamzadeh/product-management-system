const router = require('express').Router();
const {
  getCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company');

router.route('/')
  .get(getCompanies)
  .post(createCompany);

router.route('/:id')
  .get(getCompany)
  .put(updateCompany)
  .delete(deleteCompany);

module.exports = router;
