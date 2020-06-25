const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required!'],
    unique: true,
    trim: true,
  },
  tel: {
    type: String,
    required: [true, 'tel is required!'],
    trim: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);
