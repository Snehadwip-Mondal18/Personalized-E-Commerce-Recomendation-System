import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import CategoryFilter from "../../components/shop/CategoryFilter";

import {
  getProducts,
  getProductsByCategory,
} from "../../services/productService";

export default function Shop() {
  const [products, setProducts] =
    useState([]);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [sortBy, setSortBy] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        let data;

        if (selectedCategory) {
          data =
            await getProductsByCategory(
              selectedCategory
            );
        } else {
          data =
            await getProducts();
        }

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy]);

  const sortedProducts = [...products];

  if (sortBy === "lowToHigh") {
    sortedProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (sortBy === "highToLow") {
    sortedProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  if (sortBy === "rating") {
    sortedProducts.sort(
      (a, b) =>
        (b.rating || 0) -
        (a.rating || 0)
    );
  }

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct -
    productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

  const totalPages = Math.ceil(
    sortedProducts.length /
      productsPerPage
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="
        max-w-7xl
        mx-auto
        py-20
        px-6
      "
    >
      <div className="grid md:grid-cols-4 gap-10">

        {/* Sidebar */}
        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <CategoryFilter
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
          />
        </motion.div>

        {/* Products */}
        <div className="md:col-span-3">

          <div
            className="
              flex
              justify-between
              items-center
              mb-8
            "
          >
            <h2
              className="
                text-2xl
                font-bold
              "
            >
              Products (
              {sortedProducts.length}
              )
            </h2>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="
                border
                rounded-lg
                px-4
                py-2
                outline-none
              "
            >
              <option value="">
                Sort By
              </option>

              <option value="lowToHigh">
                Price: Low → High
              </option>

              <option value="highToLow">
                Price: High → Low
              </option>

              <option value="rating">
                Highest Rating
              </option>
            </select>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="
                  w-12
                  h-12
                  border-4
                  border-blue-600
                  border-t-transparent
                  rounded-full
                "
              />
            </div>
          ) : currentProducts.length ===
            0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another category
              </p>
            </div>
          ) : (
            <>
              <motion.div
                layout
                className="
                  grid
                  md:grid-cols-3
                  gap-8
                "
              >
                {currentProducts.map(
                  (
                    product,
                    index
                  ) => (
                    <Link
                      key={
                        product._id
                      }
                      to={`/product/${product._id}`}
                    >
                      <motion.div
                        layout
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index *
                            0.05,
                        }}
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                        }}
                        className="
                          bg-white
                          rounded-2xl
                          overflow-hidden
                          shadow-lg
                          hover:shadow-2xl
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
                            h-60
                            w-full
                            object-cover
                          "
                        />

                        <div className="p-5">
                          <h3 className="font-semibold text-lg">
                            {product.name}
                          </h3>

                          <p className="text-gray-500 text-sm mt-2">
                            {
                              product.category
                            }
                          </p>

                          <div className="flex justify-between items-center mt-3">
                            <p className="text-blue-600 font-bold text-xl">
                              ₹
                              {
                                product.price
                              }
                            </p>

                            <span className="text-yellow-500">
                              ⭐{" "}
                              {product.rating ||
                                4.5}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  )
                )}
              </motion.div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                {[
                  ...Array(
                    totalPages
                  ),
                ].map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentPage(
                          index + 1
                        )
                      }
                      className={`px-4 py-2 rounded-lg transition ${
                        currentPage ===
                        index + 1
                          ? "bg-blue-600 text-white"
                          : "border hover:bg-gray-100"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}