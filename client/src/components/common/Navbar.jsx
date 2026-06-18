import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, X, Heart } from "lucide-react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { useState, useContext, useRef, useEffect } from "react";

import { CartContext } from "../../context/cartContext";
import { WishlistContext } from "../../context/wishlistContext";

import { searchProducts } from "../../services/productService";

export default function Navbar() {
  const [keyword, setKeyword] = useState("");

  const [results, setResults] = useState([]);

  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef(null);

  const { cartItems } = useContext(CartContext);

  const { wishlistItems } = useContext(WishlistContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {

    const handleClickOutside = ( event ) => {

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const handleSearch = async (value) => {

    setKeyword(value);

    if (!value.trim()) {

      setResults([]);
      setShowResults(false);

      return;
    }

    try {

      const data =
        await searchProducts(value);

      setResults(data);

      setShowResults(true);

    } catch (error) {

      console.error(error);
    }
  };

  return (
    <motion.nav initial={{ y: -30, opacity: 0, }} animate={{ y: 0, opacity: 1, }} transition={{ duration: 0.5, }}
      className="sticky top-0 z-50 bg-white border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
          >
            <Link
              to="/"
              className="
                text-2xl
                font-bold
              "
            >
              TechShop
            </Link>
          </motion.div>

          {/* Search */}

          <div
            ref={searchRef}
            className="
              relative
              hidden
              md:flex
              items-center
              border
              rounded-lg
              px-3
              py-2
              w-100
            "
          >

            <Search size={18} />

            <input
              type="text"
              placeholder="Search products..."
              value={keyword}
              onChange={(e) =>
                handleSearch(
                  e.target.value
                )
              }
              onFocus={() => {
                if (
                  results.length > 0
                ) {
                  setShowResults(true);
                }
              }}
              className="
                outline-none
                ml-2
                w-full
              "
            />

            {keyword && (

              <button
                onClick={() => {

                  setKeyword("");
                  setResults([]);
                  setShowResults(false);

                }}
                className="
                  text-gray-400
                  hover:text-black
                "
              >
                <X size={18} />
              </button>

            )}

            {showResults &&
              results.length > 0 && (

              <div
                className="
                  absolute
                  top-full
                  left-0
                  w-full
                  bg-white
                  shadow-xl
                  rounded-xl
                  mt-2
                  z-50
                  overflow-hidden
                "
              >

                {results.map(
                  (product) => (

                    <Link
                      key={
                        product._id
                      }
                      to={`/product/${product._id}`}
                      onClick={() => {

                        setKeyword("");
                        setResults([]);
                        setShowResults(
                          false
                        );

                      }}
                      className="
                        flex
                        items-center
                        gap-4
                        p-3
                        hover:bg-gray-100
                      "
                    >

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                        className="
                          w-12
                          h-12
                          object-cover
                          rounded
                        "
                      />

                      <div>

                        <h4
                          className="
                            font-medium
                          "
                        >
                          {product.name}
                        </h4>

                        <p
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          ₹
                          {product.price}
                        </p>

                      </div>

                    </Link>

                  )
                )}

              </div>

            )}

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-6">

            {/* Wishlist */}

            <Link to="/wishlist">

              <div
                className="
                  relative
                "
              >

                <Heart size={22} />

                {wishlistItems.length >
                  0 && (

                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-red-500
                      text-white
                      text-xs
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {
                      wishlistItems.length
                    }
                  </span>

                )}

              </div>

            </Link>

            {/* Shop */}

            <motion.div
              whileHover={{
                y: -2,
              }}
            >
              <Link to="/shop">
                Shop
              </Link>
            </motion.div>

            {/* Cart */}

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="relative"
            >

              <Link to="/cart">

                <ShoppingCart
                  size={22}
                />

                {totalItems > 0 && (

                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-red-500
                      text-white
                      text-xs
                      min-w-5
                      h-5
                      px-1
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-semibold
                    "
                  >
                    {totalItems}
                  </span>

                )}

              </Link>

            </motion.div>

            {/* User */}

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link to="/login">
                <User size={22} />
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </motion.nav>
  );
}