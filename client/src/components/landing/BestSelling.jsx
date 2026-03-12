import "@fortawesome/fontawesome-free/css/all.min.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BestSelling() {
  const mainProduct = {
    img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/9.jpg",
    name: "Desktop C27F551",
    type: "Headphone",
    price: "$133.00",
    rating: 5,
  };

  const sideProducts = [
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/10.jpg",
      name: "Play Station",
      price: "$145.00",
      rating: 5,
    },
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/11.jpg",
      name: "Joy Stick",
      price: "$145.00",
      rating: 5,
    },
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/12.jpg",
      name: "Awesome Tab",
      price: "$145.00",
      rating: 5,
    },
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/13.jpg",
      name: "Awesome Tab",
      price: "$145.00",
      rating: 5,
    },
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/14.jpg",
      name: "Awesome Tab",
      price: "$145.00",
      rating: 5,
    },
    {
      img: "https://htmldemo.net/ezone/ezone/assets/img/product/electro/15.jpg",
      name: "Awesome Tab",
      price: "$145.00",
      rating: 5,
    },
  ];

  return (
    <motion.div
      className="w-full py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">Best Selling</h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Main Product */}
        <div className="group lg:col-span-2 relative bg-gray-100 rounded overflow-hidden">

          {/* Hover Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

            <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
              <i className="fa-solid fa-cart-shopping text-sm"></i>
            </button>

            <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
              <i className="fa-regular fa-heart text-sm"></i>
            </button>

            <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
              <i className="fa-solid fa-code-compare text-sm"></i>
            </button>

          </div>

          <img
            src={mainProduct.img}
            alt={mainProduct.name}
            className="w-full h-full object-cover"
          />
           <div className="absolute bottom-4 left-4 flex flex-col justify-center items-center w-full">
                <div className="flex space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa-star ${
                        i < mainProduct.rating
                          ? "fa-solid text-yellow-400"
                          : "fa-regular text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>

                <h3 className="text-lg font-bold">{mainProduct.name}</h3>
                <span className="text-sm">{mainProduct.price}</span>
              </div>


        </div>

        {/* Side Products */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {sideProducts.map((product, idx) => (
            <div
              key={idx}
              className="group relative h-full bg-gray-200 rounded overflow-hidden"
            >
              {/* Hover Icons */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
                  <i className="fa-solid fa-cart-shopping text-sm"></i>
                </button>

                <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
                  <i className="fa-regular fa-heart text-sm"></i>
                </button>

                <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-white hover:bg-black hover:text-white text-gray-400">
                  <i className="fa-solid fa-code-compare text-sm"></i>
                </button>
              </div>

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
               <div className="absolute bottom-4 left-4 flex flex-col justify-center items-center w-full">
                <div className="flex space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa-star ${
                        i < product.rating
                          ? "fa-solid text-yellow-400"
                          : "fa-regular text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>

                <h3 className="text-lg font-bold">{product.name}</h3>
                <span className="text-sm">{product.price}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
