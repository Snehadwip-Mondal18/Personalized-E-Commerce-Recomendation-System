import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCardHome({
  product,
}) {

  return (
    <Link
      to={`/product/${product._id}`}
      className="block"
    >

      <div
        className="
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          transition
          duration-300
          group
        "
      >

        {/* Image */}

        <div className="relative overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="
              h-64
              w-full
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />

          {/* Wishlist */}

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="
              absolute
              top-3
              right-3
              bg-white
              p-2
              rounded-full
              shadow
            "
          >
            <Heart size={18} />
          </button>

        </div>

        {/* Content */}

        <div className="p-4">

          <p className="text-sm text-blue-600">
            {product.category}
          </p>

          <h3
            className="
              font-semibold
              text-lg
              mt-1
              line-clamp-1
            "
          >
            {product.name}
          </h3>

          <p
            className="
              text-gray-500
              text-sm
              mt-1
            "
          >
            {product.brand}
          </p>

          <div className="mt-3">
            ⭐ {product.rating || 4.5}
          </div>

          <div
            className="
              flex
              justify-between
              items-center
              mt-4
            "
          >

            <span
              className="
                text-xl
                font-bold
                text-green-600
              "
            >
              ₹{product.price}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="
                bg-blue-600
                text-white
                p-2
                rounded-lg
                hover:bg-blue-700
              "
            >
              <ShoppingCart size={18} />
            </button>

          </div>

        </div>

      </div>

    </Link>
  );
}