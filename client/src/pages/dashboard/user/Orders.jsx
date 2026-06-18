import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Later import from service
// import { getMyOrders } from "../../../services/orderService";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        /*
        const data = await getMyOrders();
        setOrders(data);
        */

        // Temporary placeholder
        setOrders([]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold mb-6">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No orders found
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Order ID
                </th>

                <th className="text-left py-3">
                  Date
                </th>

                <th className="text-left py-3">
                  Status
                </th>

                <th className="text-left py-3">
                  Total
                </th>

                <th className="text-left py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order._id}
                  className="border-b"
                >
                  <td className="py-4">
                    #{order._id.slice(-6)}
                  </td>

                  <td>
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        ${
                          order.status ===
                          "Delivered"
                            ? "bg-green-100 text-green-600"
                            : order.status ===
                              "Processing"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    ₹{order.totalAmount}
                  </td>

                  <td>
                    <button
                      className="
                        text-blue-600
                        hover:underline
                      "
                    >
                      View
                    </button>
                  </td>
                </tr>

              ))}

            </tbody>

          </table>
        </div>
      )}
    </motion.div>
  );
}