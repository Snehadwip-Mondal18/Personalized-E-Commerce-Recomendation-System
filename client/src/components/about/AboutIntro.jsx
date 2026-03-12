// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function AboutIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://htmldemo.net/ezone/ezone/assets/img/banner/11.png"
          className="rounded-lg shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Welcome To Ezone
          </h2>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quisquam, voluptatibus.
          </p>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum deserunt pariatur veritatis natus!
          </p>
        </motion.div>

      </div>

    </section>
  )
}