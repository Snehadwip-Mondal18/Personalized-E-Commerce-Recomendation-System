// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBanner } from "../../services/bannerService";

export default function HeroSection() {

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const data = await getBanner();
      setBanner(data);
    };

    fetchBanner();
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-slate-900 via-blue-900 to-slate-900">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 min-h-162.5 flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔥 New Collection 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {banner?.title}
            </h1>

            <p className="text-slate-300 text-lg mt-6 max-w-lg">
              {banner?.subtitle}
            </p>

            <div className="flex gap-4 mt-10">

              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white px-8 py-4 rounded-xl"
                >
                  View Products
                </motion.button>
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={banner?.image}
              className="w-full max-w-xl rounded-3xl shadow-2xl"
            />

            {/* Floating Cards */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <p className="font-bold text-lg">50% OFF</p>
              <p className="text-sm text-gray-500">
                Limited Deal
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <p className="font-bold text-lg">
                Free Shipping
              </p>
              <p className="text-sm text-gray-500">
                On orders above ₹999
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}