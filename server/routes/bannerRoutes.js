const express = require("express");
const router = express.Router();

const {
  createBanner,
  getActiveBanner,
} = require("../controllers/bannerController");

router.post("/", createBanner);
router.get("/", getActiveBanner);

module.exports = router;