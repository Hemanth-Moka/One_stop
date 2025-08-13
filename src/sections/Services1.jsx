import React, { useState, useEffect } from "react";
import { FaCut, FaSpa, FaPaintBrush, FaHandSparkles, FaLeaf, FaBrush } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

const Service = () => {
  const services = [
    { title: "Fruit Facial", subtitle: "Fresh & rejuvenating skin care", Icon: FaLeaf },
    { title: "Gold Facial", subtitle: "Luxury golden glow", Icon: FaSpa },
    { title: "Pearl Facial", subtitle: "Radiance & smoothness", Icon: FaSpa },
    { title: "O3+ D-Tan (Face)", subtitle: "Bright & tan-free skin", Icon: FaBrush },
    { title: "Manicure", subtitle: "Perfect nails & hands", Icon: FaHandSparkles },
    { title: "Pedicure", subtitle: "Relaxing foot care", Icon: FaHandSparkles },
    { title: "Haircut", subtitle: "Trendy & classic styles", Icon: FaCut },
    { title: "Loreal Hair Spa", subtitle: "Deep hair nourishment", Icon: FaSpa },
    { title: "Full Arms D-Tan", subtitle: "Smooth & even skin tone", Icon: FaBrush },
    { title: "Honey Wax", subtitle: "Gentle & natural waxing", Icon: FaLeaf },
    { title: "Nail Art", subtitle: "Creative & stylish nail designs", Icon: FaHandshakeSimple },
    { title: "Chocolate Wax", subtitle: "Luxury waxing treatment", Icon: FaLeaf },
  ];



  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices = isMobile && !showAll ? services.slice(0, 4) : services;

  return (
    <div className="p-8 bg-black min-h-screen">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        Our <span className="text-red-600">Salon Services</span>
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {visibleServices.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>

      {/* Pricing Section */}
      {/* <div className="mt-12 text-center text-white">
        <p className="text-lg mb-2">
          Any 2 — <span className="text-red-500 font-bold">₹1200</span>
        </p>
        <p className="text-lg mb-2">
          Any 3 — <span className="text-red-500 font-bold">₹1500</span>
        </p>
        <p className="text-lg mb-2">
          Any 4 — <span className="text-red-500 font-bold">₹1800</span>
        </p>
        <p className="text-lg">
          Any 5 — <span className="text-red-500 font-bold">₹2200</span>
        </p>
      </div> */}

      {/* View More / View Less Button */}
      {isMobile && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

const Card = ({ title, subtitle, Icon }) => {
  return (
    <div className="w-full p-5 border border-red-600 relative overflow-hidden group bg-black shadow-md hover:shadow-red-600/50 transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <Icon className="absolute z-0 -top-10 -right-10 text-9xl text-red-900 opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-3 text-3xl text-red-500 group-hover:text-white relative z-10 transition-colors duration-300" />
      <h3 className="font-semibold text-lg text-white relative z-10 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-100 relative z-10 transition-colors duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Service;
