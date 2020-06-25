const { Company } = require('../models');
const asyncErrorHandler = require('../middleware/async-error-handler');
const { findDocsFromQuery } = require('../util');

// @desc      Retrieves a list of companies
// @route     GET /companies
// @access    Public
const getCompanies = asyncErrorHandler(async (req, res, next) => {
  const companies = await findDocsFromQuery({
    reqQuery: req.query,
    model: Company,
    populate: 'products'
  });
  res.success({ data: companies });
});

// @desc      Creates a new company
// @route     POST /companies
// @access    Public
const createCompany = asyncErrorHandler(async (req, res, next) => {
  const company = await Company.create(req.body);
  res.success({ data: company }, 201);
});

// @desc      Retrieves a specific company
// @route     GET /companies/:id
// @access    Public
const getCompany = asyncErrorHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id).populate('products');
  if (!company) return res.fail('not found', 404);
  res.success({ data: company });
});

// @desc      Updates a specific company
// @route     PUT /companies/:id
// @access    Public
const updateCompany = asyncErrorHandler(async (req, res, next) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!company) return res.fail('not found', 404);
  res.success({ data: company });
});

// @desc      Deletes a specific company
// @route     DELETE /companies/:id
// @access    Public
const deleteCompany = asyncErrorHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.fail('not found', 404);
  await company.remove();
  res.success({ data: null });
});

module.exports = {
  getCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
};
