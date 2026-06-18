import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Trash2 } from "lucide-react";

export default function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartTotal,
  } = useContext(CartContext);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>
        </div>

      ) : (

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="
                  flex
                  gap-6
                  bg-white
                  rounded-2xl
                  shadow
                  p-4
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-32
                    h-32
                    object-cover
                    rounded-xl
                  "
                />

                <div className="flex-1">

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() =>
                        decreaseQty(item._id)
                      }
                      className="
                        border
                        px-3
                        py-1
                        rounded
                      "
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item._id)
                      }
                      className="
                        border
                        px-3
                        py-1
                        rounded
                      "
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                >
                  <Trash2
                    className="text-red-500"
                  />
                </button>

              </div>

            ))}

          </div>

          {/* Summary */}

          <div
            className="
              bg-white
              rounded-2xl
              shadow
              p-6
              h-fit
            "
          >

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between">

              <span>Total</span>

              <span className="font-bold">
                ₹{cartTotal}
              </span>

            </div>

            <button
              className="
                w-full
                mt-6
                bg-blue-600
                text-white
                py-3
                rounded-xl
              "
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </section>
  );
}