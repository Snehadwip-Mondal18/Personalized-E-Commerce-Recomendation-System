const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  featured: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Category", categorySchema);