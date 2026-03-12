export default function ProductCardHome({ product }) {
  return (
    <div className="group cursor-pointer">

      {/* Image */}
      <div
        className="h-75 bg-cover bg-center rounded-lg overflow-hidden relative"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
      </div>

      {/* Content */}
      <div className="mt-4 text-center">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-black font-bold mt-1">
          {product.price}
        </p>

      </div>

    </div>
  );
}