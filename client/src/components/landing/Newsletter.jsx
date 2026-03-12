// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Newsletter() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-5 py-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Newsletter</h2>
        <p className="text-lg text-slate-700 font-medium">
          Sign up to get all updates & receive <span className="text-blue-500">15% off</span>
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full md:w-1/2 flex flex-row h-12 border-2 rounded overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 md:px-6 text-sm border-none focus:outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 bg-black text-white flex items-center justify-center"
        >
          <i className="fa-regular fa-paper-plane text-lg md:text-2xl"></i>
        </motion.button>
      </div>
    </motion.div>
  );
}