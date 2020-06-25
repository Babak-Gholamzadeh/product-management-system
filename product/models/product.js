const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required!'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'type is required!'],
    enum: [
      'type 1',
      'type 2',
      'type 3',
      'type 4',
      'type 5',
    ]
  },
  productionDate: {
    type: Date,
    required: [true, 'productionDate is required!'],
  },
  company: {
    type: Schema.ObjectId,
    ref: 'Company',
    requried: [true, 'company id is required!'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
