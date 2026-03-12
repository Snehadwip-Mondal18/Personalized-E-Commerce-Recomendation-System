import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeroImg from "../../assets/images/Homepage-imageSlider.png";

export default function HeroSection() {
  return (
    <div
      className="h-112.5 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="text-white ml-24 w-1/3">

        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          Say hello! to the future.
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg"
        >
          Best Product With warranty
        </motion.p>

        {/* Button Animation */}
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
        >
          Buy Now
        </motion.button>

      </div>
    </div>
  );
}