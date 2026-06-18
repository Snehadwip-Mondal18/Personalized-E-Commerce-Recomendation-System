import { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import { WishlistContext } from "../../../context/wishlistContext";
import { CartContext } from "../../../context/cartContext";

export default function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-3 mb-6">
        <Heart
          className="text-red-500"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          My Wishlist
        </h2>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart
            size={60}
            className="mx-auto text-gray-300"
          />

          <h3 className="text-xl font-semibold mt-4">
            Your wishlist is empty
          </h3>

          <p className="text-gray-500 mt-2">
            Save products you love and
            view them later.
          </p>

          <Link
            to="/shop"
            className="
              inline-block
              mt-6
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="
                flex
                items-center
                justify-between
                border
                rounded-xl
                p-4
                hover:shadow-md
                transition
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-20
                    h-20
                    object-cover
                    rounded-lg
                  "
                />

                <div>
                  <Link
                    to={`/product/${item._id}`}
                    className="
                      font-semibold
                      text-lg
                      hover:text-blue-600
                    "
                  >
                    {item.name}
                  </Link>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <p className="font-bold text-green-600 mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    addToCart(item, 1)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                  "
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(
                      item._id
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:bg-red-600
                  "
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}