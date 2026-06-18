import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getAllOrders,
  updateOrderStatus,
} from "../../../services/orderService";

export default function Orders() {
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data =
        await getAllOrders();

      setOrders(data);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to fetch orders"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange =
    async (orderId, status) => {
      try {
        await updateOrderStatus(
          orderId,
          status
        );

        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId
              ? {
                  ...order,
                  status,
                }
              : order
          )
        );

        toast.success(
          "Order status updated"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to update status"
        );
      }
    };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Manage Orders
        </h2>

        <span className="text-gray-500">
          Total Orders:
          {" "}
          {orders.length}
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="bg-gray-100 border-b">

              <th className="p-4 text-left">
                Order ID
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Items
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="
                  border-b
                  hover:bg-gray-50
                "
              >

                <td className="p-4">
                  #{order._id.slice(-6)}
                </td>

                <td className="p-4">
                  <div>
                    <p className="font-medium">
                      {order.user?.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {order.user?.email}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {order.items?.length}
                </td>

                <td className="p-4 font-semibold">
                  ₹{order.totalAmount}
                </td>

                <td className="p-4">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">

                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                    }
                    className="
                      border
                      rounded-lg
                      px-3
                      py-2
                    "
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}