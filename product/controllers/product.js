const { Product } = require('../models');
const asyncErrorHandler = require('../middleware/async-error-handler');
const { findDocsFromQuery } = require('../util');

// @desc      Retrieves a list of products
// @route     GET /products
// @access    Public
const getProducts = asyncErrorHandler(async (req, res, next) => {
  const products = await findDocsFromQuery({
    reqQuery: req.query,
    model: Product,
  });
  res.success({ data: products });
});

// @desc      Creates a new product
// @route     POST /products
// @access    Public
const createProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.success({ data: product }, 201);
});

// @desc      Retrieves a specific product
// @route     GET /products/:id
// @access    Public
const getProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate('company');
  if (!product) return res.fail('not found', 404);
  res.success({ data: product });
});

// @desc      Updates a specific product
// @route     PUT /products/:id
// @access    Public
const updateProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.fail('not found', 404);
  res.success({ data: product });
});

// @desc      Deletes a specific product
// @route     DELETE /products/:id
// @access    Public
const deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.fail('not found', 404);
  res.success({ data: null });
});

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
}
