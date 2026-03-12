import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./product/ProductCardHome";
import products from "../../data/home/allProducts";

export default function AllProducts() {

  const allProducts = products;

  return (
    <section className="max-w-7xl mx-auto py-16">

      <SectionTitle title="ALL PRODUCTS" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </section>
  );
}