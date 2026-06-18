import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProducts } from "../../services/productService";

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!products.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [products]);

  const nextSlide = () => {
    setCurrent(
      current === products.length - 1
        ? 0
        : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0
        ? products.length - 1
        : current - 1
    );
  };

  if (!products.length) return null;

  const product = products[current];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Trending Products
          </h2>

          <p className="text-gray-500 mt-3">
            Most popular products right now
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={product._id}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 shadow-lg"
            >

              {/* Product Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.05 }}
                className="w-full max-h-[500px] object-contain"
              />

              {/* Product Info */}
              <div>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  {product.category}
                </span>

                <h3 className="text-5xl font-bold mt-6">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-6">
                  {product.description}
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <span className="text-4xl font-bold text-blue-600">
                    ₹{product.price}
                  </span>

                  <span className="text-yellow-500 text-lg">
                    ⭐ {product.rating || 4.5}
                  </span>

                </div>

                <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition">
                  Buy Now
                </button>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">

          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}