import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../../assets/images/Logo2.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-48 bg-white flex flex-col justify-around border-b-2 border-slate-200"
    >
      
      {/* Top bar */}
      <div className="flex justify-between px-10 text-sm border-b py-2">
        <div className="flex gap-6">
          <span>📞 +011 2231 4545</span>
          <span>✉ company@domail.info</span>
        </div>

        <div className="flex gap-6">
          <NavLink to='/dashboard'>My Account</NavLink>
          <NavLink>Compare</NavLink>
          <NavLink>Wishlist</NavLink>
          <NavLink>Country</NavLink>
          <NavLink>Currency</NavLink>
        </div>
      </div>

      {/* Logo + Search */}
      <div className="flex items-center justify-between px-10">

        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={logo}
          alt="logo"
          className="h-14 cursor-pointer rounded-xl border-2 border-blue-400"
        />

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex border rounded overflow-hidden w-1/2"
        >

          {/* Category Dropdown */}
          <select className="bg-gray-100 px-3 outline-none border-r text-sm">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
            <option>Furniture</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Enter your keyword"
            className="flex-1 px-4 py-2 outline-none"
          />

          {/* Search Button */}
          <motion.button className="bg-black text-white px-6 cursor-pointer">
            Search
          </motion.button>

        </motion.div>

        {/* Cart */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          🛒 <span>My Cart</span>
        </motion.div>

      </div>
    </motion.header>
  );
}