import hero from "../../assets/images/shop/shop-hero.png"

export default function BlogHero() {
  return (

    <section
      className="relative h-125 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Blog Page
        </h1>

        <p className="mt-3 text-sm tracking-wide">
          HOME / BLOG
        </p>

      </div>

    </section>
  )
}