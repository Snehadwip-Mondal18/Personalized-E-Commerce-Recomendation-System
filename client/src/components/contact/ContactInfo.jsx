// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const contactInfo = [
  {
    title: "Address",
    text: "77 Seventh Avenue USA 12555"
  },
  {
    title: "Phone",
    text: "+88 (015) 609735 / +88 (012) 112266"
  },
  {
    title: "Email",
    text: "support@example.com"
  }
]

export default function ContactInfo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-3 gap-10">

        {contactInfo.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="rounded-md bg-gray-100 p-10 text-center"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  )
}