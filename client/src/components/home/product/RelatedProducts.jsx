import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  getRelatedProducts,
} from "../../../services/productService";

export default function RelatedProducts({
  productId,
}) {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data =
          await getRelatedProducts(
            productId
          );

        setProducts(data);

      } catch (error) {

        console.error(error);

      }
    };

    fetchProducts();

  }, [productId]);

  if (!products.length) return null;

  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold mb-8">
        Related Products
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {products.map((product) => (

          <Link
            key={product._id}
            to={`/product/${product._id}`}
          >
            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
              "
            >

              <img
                src={product.image}
                alt={product.name}
                className="
                  h-56
                  w-full
                  object-cover
                "
              />

              <div className="p-4">

                <h3 className="font-semibold">
                  {product.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  ₹{product.price}
                </p>

              </div>

            </motion.div>
          </Link>

        ))}

      </div>

    </section>
  );
}