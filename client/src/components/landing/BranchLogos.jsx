// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BranchLogos() {
  const logos = [
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/7.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/8.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/9.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/10.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/11.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/12.png",
    "https://htmldemo.net/ezone/ezone/assets/img/brand-logo/13.png",
  ];

  return (
    <motion.div
      className="w-full flex flex-wrap justify-around items-center py-10 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="h-24 w-24 md:w-32 md:h-24 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      ))}
    </motion.div>
  );
}