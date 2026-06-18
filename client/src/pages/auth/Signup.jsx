import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(form);

      toast.success(
        "Account Created Successfully"
      );

      navigate("/login");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Signup Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          w-full
          max-w-md
          bg-white
          shadow-xl
          rounded-xl
          p-8
        "
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Join our store today
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your name"
              onChange={handleChange}
              className="
                w-full
                mt-1
                border
                rounded-lg
                px-4
                py-2
                focus:outline-none
              "
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your email"
              onChange={handleChange}
              className="
                w-full
                mt-1
                border
                rounded-lg
                px-4
                py-2
                focus:outline-none
              "
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                placeholder="Create password"
                onChange={handleChange}
                className="
                  w-full
                  mt-1
                  border
                  rounded-lg
                  px-4
                  py-2
                  pr-12
                  focus:outline-none
                "
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-3
                  top-4
                  text-gray-500
                  cursor-pointer
                "
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-black
              text-white
              py-2
              rounded-lg
              hover:bg-gray-800
              transition
              cursor-pointer
            "
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?

          <Link
            to="/login"
            className="
              ml-1
              font-semibold
              hover:underline
            "
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}