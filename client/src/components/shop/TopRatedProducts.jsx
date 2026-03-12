import topRatedProducts from "../../data/shop/topRatedProducts";

export default function TopRatedProducts() {
  return (
    <>
    <div>

      <h3 className="font-semibold mb-4">
        Top Rated Products
      </h3>

      <div className="space-y-4">

        {topRatedProducts.map((p) => (

          <div key={p.id} className="flex gap-3">

            <img
              src={p.image}
              className="w-16 h-16 object-cover"
            />

            <div>
              <p className="text-sm">{p.name}</p>
              <p className="text-gray-500">${p.price}.00</p>
            </div>

          </div>

        ))}

      </div>

    </div>
    </>
  );
}