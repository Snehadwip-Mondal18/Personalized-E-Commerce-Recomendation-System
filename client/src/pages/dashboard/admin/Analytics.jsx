import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getDashboardAnalytics,
} from "../../../services/analyticsService";

export default function Analytics() {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics =
    async () => {
      try {
        const data =
          await getDashboardAnalytics();

        setAnalytics(data);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load analytics"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading Analytics...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Stats Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Revenue
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹
            {analytics?.totalRevenue?.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Orders
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {analytics?.totalOrders}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Users
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {analytics?.totalUsers}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Products
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {analytics?.totalProducts}
          </h2>
        </div>

      </div>

      {/* Chart Placeholder */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Monthly Sales
        </h2>

        <div
          className="
            h-80
            flex
            items-center
            justify-center
            border-2
            border-dashed
            rounded-xl
            text-gray-400
          "
        >
          Recharts Sales Graph Here
        </div>

      </div>

      {/* Recent Orders */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-gray-100">

                <th className="p-3 text-left">
                  Order ID
                </th>

                <th className="p-3 text-left">
                  Customer
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {analytics?.recentOrders?.map(
                (order) => (
                  <tr
                    key={order._id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {order._id}
                    </td>

                    <td className="p-3">
                      {order.user?.name}
                    </td>

                    <td className="p-3">
                      ₹{order.totalPrice}
                    </td>

                    <td className="p-3">

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          ${
                            order.status ===
                            "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status ===
                                "Processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {order.status}
                      </span>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Top Products */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Top Selling Products
        </h2>

        <div className="space-y-4">

          {analytics?.topProducts?.map(
            (product) => (
              <div
                key={product._id}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  pb-3
                "
              >

                <div className="flex items-center gap-4">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-14
                      h-14
                      rounded-lg
                      object-cover
                    "
                  />

                  <div>

                    <h3 className="font-semibold">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {product.category}
                    </p>

                  </div>

                </div>

                <div className="font-bold">
                  {product.sales} Sold
                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}