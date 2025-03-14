import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Free shipping on all US orders above $200",
    icon: "fa-truck",
  },
  {
    id: 2,
    title: "24X7 Support",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: "fa-headset",
  },
  {
    id: 3,
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
    icon: "fa-rotate-left",
  },
  {
    id: 4,
    title: "Payment Secure",
    desc: "We ensure secure payment transactions",
    icon: "fa-shield-alt",
  },
];

const Transport = ({ selectedColor, theme }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`shadow-md rounded-lg p-4 flex flex-col items-center text-center border ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-black"
            }`}
          >
            <i
              className={`fas ${service.icon} text-4xl mb-4`}
              style={{ color: selectedColor }}
            ></i>
            <h5 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h5>
            <p className="text-sm text-gray-500 mt-2 leading-snug text-center max-w-[180px]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
