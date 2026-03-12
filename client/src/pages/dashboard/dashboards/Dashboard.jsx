// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const orders = [
    { id: "#5421", date: "12 Mar 2026", status: "Delivered", total: "$149" },
    { id: "#5418", date: "10 Mar 2026", status: "Processing", total: "$89" },
    { id: "#5409", date: "05 Mar 2026", status: "Cancelled", total: "$45" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-6">My Account</h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <i className="fa-solid fa-user"></i> Profile
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <i className="fa-solid fa-box"></i> Orders
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <i className="fa-solid fa-heart"></i> Wishlist
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <i className="fa-solid fa-location-dot"></i> Addresses
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <i className="fa-solid fa-gear"></i> Settings
            </li>

            <li className="flex items-center gap-3 cursor-pointer text-red-500">
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </li>
            <Link to='/signup' className="flex items-center gap-3 cursor-pointer text-blue-500">
              Signup
            </Link>
            <Link to='/login' className="flex items-center gap-3 cursor-pointer text-cyan-500">
              Login
            </Link>
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">

          {/* Profile Card */}
          <div className="bg-white p-6 rounded shadow flex items-center gap-6">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full"
            />

            <div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-500">john@email.com</p>
              <p className="text-gray-500">Member since 2024</p>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Recent Orders</h3>

            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="py-2">Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{order.id}</td>
                    <td>{order.date}</td>
                    <td
                      className={`font-semibold ${
                        order.status === "Delivered"
                          ? "text-green-500"
                          : order.status === "Processing"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </motion.div>
  );
}