import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { getProductById } from "../../services/productService";
import RelatedProducts from "../../components/home/product/RelatedProducts";
import { WishlistContext } from "../../context/wishlistContext";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-40">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-40">
        Product not found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid lg:grid-cols-2 gap-16">

        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              rounded-3xl
              shadow-xl
            "
          />
        </motion.div>

        {/* DETAILS */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <p className="text-blue-600 font-medium">
            {product.brand}
          </p>

          <h1 className="text-5xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-4">
            {product.description}
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-green-600">
              ₹{product.price}
            </span>
          </div>

          <div className="mt-4 text-lg">
            ⭐ {product.rating || 4.5}
          </div>

          <div className="mt-4">
            Stock:
            <span
              className={`ml-2 font-semibold ${
                product.stock > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">
              Quantity
            </h3>

            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev > 1 ? prev - 1 : 1
                  )
                }
                className="
                  w-10 h-10
                  border
                  rounded-lg
                  text-xl
                  font-bold cursor-pointer
                "
              >
                -
              </button>

              <span className="text-xl font-semibold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev + 1
                  )
                }
                className="
                  w-10 h-10
                  border
                  rounded-lg
                  text-xl
                  font-bold cursor-pointer
                "
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">

            <button
              onClick={() => {
                addToCart(product, quantity);

                toast.success(
                  `${quantity} × ${product.name} added to cart`,
                  {
                    duration: 2000,
                  }
                );
              }}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                cursor-pointer
              "
            >
              Add To Cart ({quantity})
            </button>

            <button
              onClick={() => {

                addToWishlist(
                  product
                );

                toast.success(
                  "Added to wishlist"
                );

              }}
              className="
                border
                px-8
                py-4
                rounded-xl
              "
            >
              Wishlist
            </button>

          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        productId={product._id}
      />
    </section>
  );
}