import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";

export default function TopProducts() {
  return (
    <div className="flex flex-col items-center px-20 py-10 bg-gray-100">

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        Top Products
      </motion.h1>

      <ProductGrid />

      {/* Gaming Banner */}
      <div className="w-full h-72 border-10 border-slate-200 flex justify-between bg-white"
      >
        <div className="w-1/2 flex flex-col justify-center px-24">
          <h3 className="text-3xl font-bold">
            Play with flexible
          </h3>

          <p className="text-lg font-semibold my-3">
            Multicontrol Smooth Controller, Black Color.
            All buttons are smooth and super shine.
          </p>

          <button className="bg-white text-black w-28 p-2 font-bold rounded border-2 border-black hover:bg-black hover:text-white transition">
            Buy now
          </button>
        </div>

        <motion.div 
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
          className="w-1/3 h-full bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJf2_2wSuKVDHZfAybYxcaPcjljzFxPZXQl67yKFvZnKLC9O5d)"
          }}
        />
      </div>

    </div>
  );
}