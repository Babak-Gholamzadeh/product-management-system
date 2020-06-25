const mongoose = require('mongoose');
const { MongoDB } = require('../config');

exports.connect = mongoose.connect(MongoDB.URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

