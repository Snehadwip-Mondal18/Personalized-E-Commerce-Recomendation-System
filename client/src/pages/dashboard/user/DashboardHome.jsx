import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function DashboardHome() {
  const { user } = useContext(AuthContext);

  const stats = [
    {
      title: "Orders",
      value: 12,
      color: "bg-blue-500",
    },
    {
      title: "Wishlist",
      value: 8,
      color: "bg-pink-500",
    },
    {
      title: "Addresses",
      value: 3,
      color: "bg-green-500",
    },
    {
      title: "Reviews",
      value: 15,
      color: "bg-yellow-500",
    },
  ];

  const recentOrders = [
    {
      id: "#5421",
      status: "Delivered",
      amount: "₹1499",
    },
    {
      id: "#5418",
      status: "Processing",
      amount: "₹899",
    },
    {
      id: "#5409",
      status: "Cancelled",
      amount: "₹499",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Welcome Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold">
          Welcome,
          {" "}
          {user?.name || "User"} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account, orders and settings from here.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow p-5"
          >
            <div
              className={`
                w-12
                h-12
                rounded-lg
                ${item.color}
                mb-4
              `}
            />

            <h3 className="text-gray-500">
              {item.title}
            </h3>

            <p className="text-3xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Order ID
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-left">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b"
                >
                  <td className="py-3">
                    {order.id}
                  </td>

                  <td>
                    <span
                      className={`font-medium ${
                        order.status ===
                        "Delivered"
                          ? "text-green-600"
                          : order.status ===
                            "Processing"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}