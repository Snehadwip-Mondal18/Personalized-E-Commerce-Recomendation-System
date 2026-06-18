import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getFlashSaleProducts } from "../../services/productService";

export default function FlashSale() {

  const [products, setProducts] = useState([]);
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchFlashProducts = async () => {
      try {
        const data = await getFlashSaleProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlashProducts();
  }, []);

  const getTimeLeft = (endDate) => {

    const diff =
      new Date(endDate).getTime() -
      new Date().getTime();

    if (diff <= 0)
      return "Expired";

    const hours = Math.floor(
      diff / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) /
      1000
    );

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <section className="py-20 bg-linear-to-r from-red-600 via-orange-500 to-yellow-500">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white text-center">
            ⚡ Flash Sale
          </h2>

          <p className="text-center text-white mt-4">
            Limited time offers on top products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {products.map((product) => (

            <Link
              key={product._id}
              to={`/product/${product._id}`}
            >

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              >

                {/* Product Image */}
                <div className="relative">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    {product.discount}% OFF
                  </div>

                </div>

                {/* Product Info */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {product.brand}
                  </p>

                  <div className="mt-4">

                    <span className="text-3xl font-bold text-red-600">
                      ₹
                      {Math.floor(
                        product.price -
                        (
                          product.price *
                          product.discount
                        ) / 100
                      )}
                    </span>

                    <span className="ml-3 text-gray-400 line-through">
                      ₹{product.price}
                    </span>

                  </div>

                  <div className="mt-6 bg-gray-100 rounded-xl p-3">

                    <p className="text-sm text-gray-500">
                      Ends In
                    </p>

                    <p className="font-bold text-lg">
                      {getTimeLeft(
                        product.saleEndDate
                      )}
                    </p>

                  </div>

                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}