// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const services = [
  { title: "Free Shipping", desc: "Free shipping on all orders." },
  { title: "Money Return", desc: "30 days money return guarantee." },
  { title: "Online Support", desc: "24/7 customer support." },
]

export default function AboutServices() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {services.map((service, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-10 text-center shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600">
              {service.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}