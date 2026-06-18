import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../context/cartContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { getFeaturedProducts } from "../../services/productService";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      {successMessage && (
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 100,
          }}
          className="
            fixed
            top-40
            right-6
            z-9999
            bg-green-500
            text-white
            px-6
            py-3
            rounded-xl
            shadow-xl
            font-medium
          "
        >
          {successMessage}
        </motion.div>
      )}

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Hand-picked products recommended for you
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product, index) => (

          <Link
            key={product._id}
            to={`/product/${product._id}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow
                hover:shadow-2xl
                transition
              "
            >

              <div className="relative h-64 overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />

                <div
                  className="
                  absolute inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex
                  justify-center
                  items-center
                  gap-4
                "
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      addToCart(product, 1);

                      toast.success(`${product.name} added to cart`);

                      setTimeout(() => {
                        setSuccessMessage("");
                      }, 2000);
                    }}
                    className="
                      bg-white
                      p-3
                      rounded-full
                      hover:scale-110
                      transition
                    "
                  >
                    <ShoppingCart size={18} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/${product._id}`);
                    }}
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <Eye size={18} />
                  </button>
                </div>

              </div>

              <div className="p-5">

                <p className="text-sm text-blue-500 font-medium">
                  {product.category}
                </p>

                <h3 className="font-semibold text-lg mt-1">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {product.brand}
                </p>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-2xl font-bold">
                    ₹{product.price}
                  </span>

                  <span className="text-yellow-500">
                    ⭐ {product.rating || 4.5}
                  </span>

                </div>

              </div>

            </motion.div>
          </Link>

        ))}

      </div>
    </section>
  );
}