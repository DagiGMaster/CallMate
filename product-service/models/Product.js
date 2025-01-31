const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productSku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Product', ProductSchema);
