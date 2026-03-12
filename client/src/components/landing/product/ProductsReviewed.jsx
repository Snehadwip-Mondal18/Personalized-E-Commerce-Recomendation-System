// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProductsReviewed() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const products = [
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/16.jpg",
      price: "$499.00",
      rating: 4,
    },
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/17.jpg",
      price: "$499.00",
      rating: 4,
    },
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/18.jpg",
      price: "$499.00",
      rating: 4,
    },
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/16.jpg",
      price: "$499.00",
      rating: 4,
    },
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/17.jpg",
      price: "$499.00",
      rating: 4,
    },
    {
      name: "Autel robotics-x-star premium quadcopter",
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/18.jpg",
      price: "$499.00",
      rating: 4,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-gray-100 p-6 md:p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product, idx) => (
        <motion.div
          key={idx}
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="bg-white border-2 border-slate-200 flex flex-col md:flex-row items-center p-4 gap-4 rounded-lg shadow-sm hover:shadow-lg transition"
        >
          {/* Product Image */}
          <div className="w-full md:w-2/5 h-48 flex justify-center items-center overflow-hidden">
            <motion.img
              src={product.img}
              alt={product.name}
              className="object-contain h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-3/5 h-48 flex flex-col justify-between pl-2 md:pl-4">
            <p className="text-lg font-bold">{product.name}</p>

            {/* Rating */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-solid fa-star ${
                    i < product.rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                ></i>
              ))}
            </div>

            <span className="text-2xl font-semibold">{product.price}</span>

            {/* Icons */}
            <div className="flex gap-3 pt-2">

              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 flex items-center justify-center border rounded-full text-gray-400 hover:bg-black hover:text-white cursor-pointer"
              >
                <i className="fa-solid fa-cart-shopping text-sm" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 flex items-center justify-center border rounded-full text-gray-400 hover:bg-black hover:text-white cursor-pointer"
              >
                <i className="fa-regular fa-heart text-sm" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 flex items-center justify-center border rounded-full text-gray-400 hover:bg-black hover:text-white cursor-pointer"
              >
                <i className="fa-solid fa-retweet text-sm" />
              </motion.div>

            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
