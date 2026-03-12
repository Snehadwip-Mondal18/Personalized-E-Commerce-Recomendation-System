// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section
      className="relative h-87.5 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://htmldemo.net/ezone/ezone/assets/img/bg/breadcrumb.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-semibold">About Us</h1>
        <p className="mt-3 text-sm tracking-wide">HOME / ABOUT US</p>
      </motion.div>
    </section>
  )
}