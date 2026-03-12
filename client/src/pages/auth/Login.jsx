import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-8"
      >

        <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
        <p className="text-gray-500 text-center mb-6">
          Welcome back to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-black hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

      </motion.div>
    </div>
  );
}