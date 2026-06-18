const Banner = require("../models/Banner");

const createBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);

    res.status(201).json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getActiveBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne({ active: true });

    res.status(200).json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBanner,
  getActiveBanner,
};