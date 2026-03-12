import SectionTitle from "../shared/SectionTitle";
import instaFeed from "../../data/home/instaFeed";

export default function InstaFeed() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <SectionTitle title="INSTA FEED" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

          {instaFeed.map((item) => (
            <div key={item.id} className="overflow-hidden rounded">

              <img
                src={item.image}
                alt="instagram"
                className="w-full h-40 object-cover hover:scale-110 transition duration-500"
              />

            </div>
          ))}

        </div>

      </section>
    </>
  );
}