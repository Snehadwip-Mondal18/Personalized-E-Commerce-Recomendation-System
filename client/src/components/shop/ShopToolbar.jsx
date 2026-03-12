import shopProducts from "../../data/shop/shopProducts";

export default function ShopToolbar() {

  const totalProducts = shopProducts.length;

  return (
    <>
    <div className="flex justify-between items-center mb-10">

      <p>
        {totalProducts} Product Found
      </p>

      <select className="border px-3 py-1">

        <option>Sort by Default</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>

      </select>

    </div>
    </>
  );
}