import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="w-full h-96 relative flex flex-col items-center overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />

      {/* Hover Icons */}
      <div
        transition={{ duration: 0.6 }} className="absolute bottom-32 flex gap-3 opacity-0 group-hover:opacity-100 transition w-30 h-12 p-2 rounded-2xl shadow-md shadow-gray-400">
        <button className="w-1/3 h-full flex items-center justify-center rounded-full border text-gray-400 bg-white hover:bg-black hover:text-white cursor-pointer">
          <i className="fa-solid fa-cart-shopping text-sm"></i>
        </button>

        <button className="w-1/3 h-full flex items-center justify-center rounded-full border bg-white hover:bg-black hover:text-white text-gray-400 cursor-pointer">
          <i className="fa-regular fa-heart text-sm"></i>
        </button>

        <button className="w-1/3 h-full flex items-center justify-center rounded-full border bg-white hover:bg-black hover:text-white text-gray-400 cursor-pointer">
          <i className="fa-solid fa-retweet text-sm"></i>
        </button>
      </div>

      <div className="absolute bottom-7 flex flex-col items-center bg-white/70 px-4 py-2 rounded">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-gray-400 font-semibold">{product.color}</p>
        <span className="text-lg font-bold text-gray-700">
          ${product.price}
        </span>
      </div>
    </motion.div>
  );
}