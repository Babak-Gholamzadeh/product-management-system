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
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  timestamps: true
});

CompanySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'company',
  jsonOne: false
});

CompanySchema.pre('remove', async function () {
  await this.model('Product').deleteMany({ company: this._id });
});

module.exports = mongoose.model('Company', CompanySchema);
