// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function DiscountProduct() {
  return (
    <motion.div
      className="w-full flex justify-center px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full max-w-6xl h-65 bg-linear-to-r from-[#0b1830] to-[#0c1425] flex items-center justify-center overflow-visible">
        {/* Discount Circle */}
        <div className="absolute left-0 top-0 w-40 h-40 bg-gray-500 rounded-br-[120px] flex flex-col justify-center items-center text-white">
          <span className="text-2xl font-bold">$125.00</span>
          <del className="text-lg">$199.00</del>
        </div>

        {/* Text Section */}
        <div className="text-center max-w-xl text-white flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            Xolo Fast T2 Smartphone, Android <br />
            7.0 Unlocked.
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer mt-6 uppercase font-semibold tracking-wide flex items-center justify-center gap-2 hover:gap-3 transition-all hover:text-gray-400"
          >
            Buy Now
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </div>

        {/* Phone Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute right-10 -bottom-10 w-56 md:w-64"
        >
          <img
            src="https://htmldemo.net/ezone/ezone/assets/img/banner/10.png"
            alt="phone"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
