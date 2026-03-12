import shopCategories from "../../data/shop/shopCategories";
import TopRatedProducts from "./TopRatedProducts";

export default function ShopSidebar() {
  return (
    <>
    <div className="space-y-10">

      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">Search Products</h3>

        <input
          type="text"
          placeholder="Search..."
          className="border w-full p-2"
        />
      </div>

      {/* Categories */}
      <div>

        <h3 className="font-semibold mb-3">
          Categories
        </h3>

        <ul className="space-y-2">

          {shopCategories.map((cat, i) => (
            <li key={i} className="flex justify-between text-gray-600">

              <span>{cat.name}</span>

              <span>{cat.count}</span>

            </li>
          ))}

        </ul>

      </div>

      <TopRatedProducts />

    </div>
    </>
  );
}