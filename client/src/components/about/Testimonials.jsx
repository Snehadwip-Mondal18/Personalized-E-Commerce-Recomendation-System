import testimonials from "../../data/about/tesimonials"

export default function Testimonials() {

  return (

    <section className="bg-gray-100 py-20">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-10">
          Testimonials
        </h2>

        {testimonials.map((t) => (

          <div key={t.id} className="mb-6">

            <p className="text-gray-600 italic">
              "{t.text}"
            </p>

            <p className="mt-2 font-semibold">
              - {t.author}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}