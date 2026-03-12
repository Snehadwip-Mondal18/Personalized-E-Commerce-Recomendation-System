import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const banners = [
  {
    id: 1,
    img: "https://htmldemo.net/ezone/ezone/assets/img/banner/20.jpg",
    title: "Best Electronics Products.",
    type: "text",
  },
  {
    id: 2,
    img: "https://htmldemo.net/ezone/ezone/assets/img/banner/21.jpg",
    type: "discount",
    discount: "25%",
    product: "Bitso X1202",
  },
  {
    id: 3,
    img: "https://htmldemo.net/ezone/ezone/assets/img/banner/22.jpg",
    type: "offer",
    offer: "Up to 10% Off",
    product: "Lenovo Vio D22",
  },
];

export default function DiscountSection() {
  return (
    <div className="flex justify-around items-center px-10 py-10 bg-gray-100 gap-6">

      {banners.map((banner) => (
        <motion.div
          key={banner.id}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.3 }}
          className="relative w-[30%] overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={banner.img}
            alt="banner"
            className="w-full h-55 object-cover"
          />

          {/* Overlay content */}
          <div className="absolute left-10 top-8 text-white w-[40%]">

            {banner.type === "text" && (
              <h2 className="text-2xl font-bold">
                {banner.title}
              </h2>
            )}

            {banner.type === "discount" && (
              <div className="space-y-2">
                <p className="flex flex-col">
                  <span className="uppercase">Get</span>
                  <span className="text-5xl font-light">
                    {banner.discount}
                  </span>
                  <span className="uppercase text-center">Off</span>
                </p>
                <h2 className="text-xl font-bold">
                  {banner.product}
                </h2>
              </div>
            )}

            {banner.type === "offer" && (
              <div className="space-y-3">
                <p className="text-4xl font-light">
                  {banner.offer}
                </p>
                <h2 className="text-xl font-bold">
                  {banner.product}
                </h2>
              </div>
            )}

          </div>
        </motion.div>
      ))}

    </div>
  );
}