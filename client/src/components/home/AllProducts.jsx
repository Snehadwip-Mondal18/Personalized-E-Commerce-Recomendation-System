import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./product/ProductCardHome";
import { getProducts } from "../../services/productService";

export default function AllProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16">

      <SectionTitle title="ALL PRODUCTS" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}