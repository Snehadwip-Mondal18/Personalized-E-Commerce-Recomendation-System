// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { trendingCards } from "../../data/home/trendingCards";

export default function TrendingGrid() {
  const mainCard = trendingCards[0];
  const otherCards = trendingCards.slice(1);

  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Left Big Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 bg-cover bg-center text-white flex flex-col justify-center relative h-80"
          style={{ backgroundImage: `url(${mainCard.image})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative">
            <p className="text-sm">{mainCard.subtitle}</p>

            <h2 className="text-3xl font-bold mt-2 whitespace-pre-line">
              {mainCard.title}
            </h2>
          </div>
        </motion.div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-6">

          {otherCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 bg-cover bg-center text-white flex items-center justify-center text-center relative ${
                card.span ? "col-span-2" : ""
              } h-37.5`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold whitespace-pre-line">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <p className="text-sm">{card.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}