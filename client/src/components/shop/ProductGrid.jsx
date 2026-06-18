import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductGrid() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {products.map((product) => (

        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="border rounded-xl overflow-hidden hover:shadow-lg transition"
        >

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />

          <div className="p-4">

            <h3 className="font-semibold text-lg">
              {product.name}
            </h3>

            <p className="text-gray-500">
              {product.category}
            </p>

            <p className="font-bold text-xl mt-2">
              ₹{product.price}
            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}