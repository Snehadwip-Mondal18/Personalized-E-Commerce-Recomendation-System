import teamMembers from "../../data/about/teamMembers"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function TeamSection() {

  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {teamMembers.map((member) => (

          <motion.div
            key={member.id}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >

            <img
              src={member.image}
              className="w-full h-80 object-cover rounded"
            />

            <h3 className="mt-4 font-semibold">
              {member.name}
            </h3>

            <p className="text-gray-500">
              {member.role}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  )
}