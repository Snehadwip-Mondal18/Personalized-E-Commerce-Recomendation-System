import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import logo from "../../assets/images/Logo2.png";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-14"
              />
            </Link>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <div className="flex border rounded-xl overflow-hidden">

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-3 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </motion.button>

            </div>
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-6">

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/wishlist">
                <Heart size={22} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/cart">
                <ShoppingCart size={22} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/login">
                <User size={22} />
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </motion.header>
  );
}