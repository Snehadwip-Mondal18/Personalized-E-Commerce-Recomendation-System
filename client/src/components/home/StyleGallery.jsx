import styleGallery from "../../data/home/styleGallery";

export default function StyleGallery() {
  const { leftBanner, gridImages } = styleGallery;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-4">

          {/* Left Banner */}
          <div
            className="relative h-125 bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${leftBanner.image})` }}
          >

            {/* Yellow Overlay */}
            <div className="absolute inset-0 bg-yellow-400/40"></div>

            {/* Text */}
            <div className="relative z-10 px-10 text-black">
              <p className="tracking-widest text-sm">
                {leftBanner.subtitle}
              </p>

              <h2 className="text-5xl font-bold my-2">
                {leftBanner.title}
              </h2>

              <p className="text-sm">
                {leftBanner.price}
              </p>
            </div>

          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">

            {gridImages.map((img) => (
              <div key={img.id} className="overflow-hidden">

                <img
                  src={img.image}
                  alt="style"
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}