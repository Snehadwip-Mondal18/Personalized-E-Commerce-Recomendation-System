import heroImg from "../../assets/images/home/7.webp";

export default function HeroHome() {
  return (
    <section className="bg-[#dff1d5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">

        <div>
          <h1 className="text-6xl font-extrabold tracking-widest">
            FASHION
          </h1>

          <p className="mt-4 text-gray-600">
            Create your own style for better looks.
          </p>
        </div>

        <div className="flex justify-center">
          <img src={heroImg} className="w-80" />
        </div>

      </div>
    </section>
  );
}