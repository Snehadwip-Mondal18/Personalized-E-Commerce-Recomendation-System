import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-10 h-12 border-b">
      <NavLink to="/home" className="hover:text-blue-500">Home</NavLink>
      <NavLink to="/shop" className="hover:text-blue-500">Shop</NavLink>
      <NavLink to="/blog" className="hover:text-blue-500">Blog</NavLink>
      <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
      <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
    </nav>
  );
}