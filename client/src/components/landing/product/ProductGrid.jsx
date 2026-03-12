import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Demo TV 32GB",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/22.jpg"
  },
  {
    name: "Pebble Time",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/23.jpg"
  },
  {
    name: "Zendure 4-Port USB",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/24.jpg"
  },
  {
    name: "Gaming Joystick",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/25.jpg"
  },
  {
    name: "Router",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/26.jpg"
  },
  {
    name: "Pebble Watch",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/27.jpg"
  },
  {
    name: "CPU Fan",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/28.jpg"
  },
  {
    name: "USB Hub",
    color: "Black",
    price: "49.99",
    image: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/29.jpg"
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function ProductGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full grid grid-cols-4 gap-8 py-10 mb-20"
    >
      {products.map((product, index) => (
        <motion.div key={index} variants={item}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}