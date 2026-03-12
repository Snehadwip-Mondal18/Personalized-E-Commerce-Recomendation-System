import shopProducts from "../../data/shop/shopProducts";

export default function ShopProductGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {shopProducts.map((product) => (

        <div key={product.id} className="group">

          {/* Image Wrapper */}
          <div className="bg-gray-100 h-80 relative overflow-hidden">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${product.image})` }}
            />

            {product.badge && (
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                {product.badge}
              </span>
            )}

          </div>

          {/* Product Info */}
          <h3 className="mt-4 font-medium">
            {product.name}
          </h3>

          <p className="text-gray-600">
            ${product.price}.00
          </p>

        </div>

      ))}

    </div>
  );
}