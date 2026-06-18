import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/productService";

export default function CategoryPage() {

  const { slug } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const data =
        await getProductsByCategory(slug);

      setProducts(data);
    };

    fetchProducts();

  }, [slug]);

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold mb-12 capitalize">
        {slug}
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-white rounded-xl shadow"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold">
                ₹{product.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}