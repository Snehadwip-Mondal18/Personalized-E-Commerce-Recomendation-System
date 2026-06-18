const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getTrendingProducts,
  getProductsByCategory,
  getFlashSaleProducts,
  searchProducts,
  getRelatedProducts,
} = require("../controllers/productController");


// CREATE PRODUCT
router.post("/", createProduct);


// GET ALL PRODUCTS
router.get("/", getProducts);


// GET FEATURED PRODUCTS
router.get("/featured", getFeaturedProducts);

// GET TRENDING PRODUCTS
router.get("/trending", getTrendingProducts);

// GET PRODUCTS BY CATEGORY
router.get("/category/:slug", getProductsByCategory);

// SEARCH PRODUCTS
router.get("/search", searchProducts);

// GET FLASH SALE PRODUCTS
router.get("/flash-sale",  getFlashSaleProducts);

// GET RELATED PRODUCTS
router.get("/related/:id", getRelatedProducts);

// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// UPDATE PRODUCT
router.put("/:id", updateProduct);


// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;