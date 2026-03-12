// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function BlogCard({ post }) {
  return (

    <motion.div
      whileHover={{ y: -8 }}
      transition={{duration:0.4}}
      className="bg-gray-100 p-4 rounded-md shadow-xl shadow-gray-500"
    >

      <img
        src={post.image}
        className="w-full h-60 object-cover"
      />

      <div className="py-5">

        <p className="text-xs text-gray-500">
          {post.category} | {post.date}
        </p>

        <h3 className="text-lg font-semibold mt-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          {post.desc}
        </p>

        <button className="mt-4 border px-4 py-2 text-sm hover:bg-black hover:text-white transition rounded-md">
          Read More
        </button>

      </div>

    </motion.div>
  )
}