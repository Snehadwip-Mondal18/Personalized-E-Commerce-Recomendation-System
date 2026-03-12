import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./product/ProductCardHome";
import newArrivals from "../../data/home/newArrivals";

export default function NewArrivals() {

  return (
    <section className="max-w-7xl mx-auto py-16">

      <SectionTitle title="NEW ARRIVALS" />

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}