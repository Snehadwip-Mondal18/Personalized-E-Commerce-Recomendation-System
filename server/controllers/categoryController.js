const Category = require("../models/Category");

// GET all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE category (admin use)
const createCategory = async (req, res) => {
  try {
    const { name, slug, image } = req.body;

    const category = await Category.create({
      name,
      slug,
      image,
    });

    res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getCategories, createCategory };