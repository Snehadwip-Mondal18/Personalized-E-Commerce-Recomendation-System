import Img1 from "../../assets/images/home/1.webp";
import Img2 from "../../assets/images/home/2.webp"
import Img3 from "../../assets/images/home/3.webp"

export default function PromoBanners() {

  const banners = [
    {
      title: "BLUE Glasses",
      subtitle: "",
      image: Img1,
    },
    {
      title: "30% OFF",
      subtitle: "Black Friday Discount",
      image: Img2,
    },
    {
      title: "Trend 2022",
      subtitle: "",
      image: Img3,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-2">

      {banners.map((banner, index) => (
        <div
          key={index}
          className="p-10 bg-cover bg-center text-black flex flex-col justify-center min-h-50"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <h2 className="text-3xl font-bold whitespace-pre-line">
            {banner.title}
          </h2>

          {banner.subtitle && (
            <p className="mt-2 text-sm">{banner.subtitle}</p>
          )}
        </div>
      ))}

    </section>
  );
}