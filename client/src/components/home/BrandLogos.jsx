import brandLogos from "../../data/home/brandLogos";

export default function BrandLogos() {
  return (
    <>
      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">

            {brandLogos.map((brand) => (
              <>
                <img
                  key={brand.id}
                  src={brand.image}
                  alt="brand"
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}