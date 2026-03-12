// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sections = [
    {
      title: "Contact Us",
      items: [
        { label: "Address", value: "77 Seventh Streeth Banasree Road Rampura -2100 Dhaka" },
        { label: "Phone", value: "+11 (019) 2518 4203 / +11 (251) 2223 3353" },
        { label: "Email", value: "domain@mail.com / company@domain.info" },
      ],
    },
    {
      title: "My Account",
      items: ["Login here", "Cart history", "Payment history", "Product tracking", "Register"],
    },
    {
      title: "Information",
      items: ["About Us", "Our Service", "Pricing Plan", "Vendor Detail", "Affiliate"],
    },
    {
      title: "Service",
      items: ["Product Service", "Payment Service", "Discount Service", "Shopping Service", "Promotional Add"],
    },
  ];

  const features = [
    { icon: "fa-truck-moving", title: "Free Shipping", desc: "Free Shipping on Bangladesh" },
    { icon: "fa-shield-halved", title: "Money Guarantee", desc: "100% money back guarantee" },
    { icon: "fa-headphones-simple", title: "Online Support", desc: "24/7 customer support" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top Sections */}
      <motion.div
        className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sections.map((section, idx) => (
          <motion.div key={idx} variants={fadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{section.title}</h3>
            <div className="flex flex-col space-y-4">
              {section.items.map((item, i) => (
                <p
                  key={i}
                  className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
                >
                  <i className="fa-regular fa-circle text-[7px]"></i>
                  <span>{typeof item === "string" ? item : item.value}</span>
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features */}
      <motion.div
        className="bg-black py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="flex items-center space-x-5"
          >
            <i className={`fa-solid ${feature.icon} text-4xl text-gray-400 w-12`}></i>
            <div>
              <h4 className="text-xl font-bold text-gray-400">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Links */}
      <motion.div
        className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Blog</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Help Center</a>
        </div>
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2026 <a href="#" className="underline hover:text-gray-200">SmartChoice</a>. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}