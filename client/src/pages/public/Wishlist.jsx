import { useContext } from "react";
import { WishlistContext }
from "../../context/wishlistContext";

import { Link }
from "react-router-dom";

export default function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(
    WishlistContext
  );

  return (
    <section
      className="
      max-w-7xl
      mx-auto
      py-20
      px-6
    "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-10
      "
      >
        Wishlist
      </h1>

      {wishlistItems.length === 0 ? (

        <p>
          No products added
        </p>

      ) : (

        <div
          className="
          grid
          md:grid-cols-4
          gap-8
        "
        >

          {wishlistItems.map(
            (product) => (

              <div
                key={product._id}
                className="
                bg-white
                rounded-2xl
                shadow
                p-4
              "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-56
                    w-full
                    object-cover
                    rounded-xl
                  "
                />

                <h3
                  className="
                  font-semibold
                  mt-4
                "
                >
                  {product.name}
                </h3>

                <p>
                  ₹{product.price}
                </p>

                <div
                  className="
                  flex
                  gap-3
                  mt-4
                "
                >

                  <Link
                    to={`/product/${product._id}`}
                    className="
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded
                    "
                  >
                    View
                  </Link>

                  <button
                    onClick={() =>
                      removeFromWishlist(
                        product._id
                      )
                    }
                    className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded
                    "
                  >
                    Remove
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </section>
  );
}