// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Get In Touch
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border p-3"
            />

            <button className="bg-black text-white px-8 py-3">
              Send Message
            </button>

          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <iframe
            className="w-full h-100"
            src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </motion.div>

      </div>

    </section>
  )
}