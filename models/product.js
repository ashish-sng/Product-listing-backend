const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  productLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;