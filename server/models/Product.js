const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false
    },
    brand: {
      type: String,
      default: ""
    },
    trending: {
      type: Boolean,
      default: false
    },
    flashSale: {
      type: Boolean,
      default: false
    },
    discount: {
      type: Number,
      default: 0
    },
    saleEndDate: {
      type: Date
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);