import React, { useState, useEffect } from "react";
import {
  FaCut,
  FaSpa,
  FaPaintBrush,
  FaHandSparkles,
  FaLeaf,
  FaBrush,
} from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

const Service = () => {
  const services = [
    {
      title: "Fruit Facial",
      subtitle: "Fresh & rejuvenating skin care",
      Icon: FaLeaf,
      more:
        "Hi 🌸, I'm interested in Fruit Facial. Can you share more details?",
    },
    {
      title: "Gold Facial",
      subtitle: "Luxury golden glow",
      Icon: FaSpa,
      more:
        "Hi 🌟, I'm interested in Gold Facial. Can you share more details?",
    },
    {
      title: "Pearl Facial",
      subtitle: "Radiance & smoothness",
      Icon: FaSpa,
      more:
        "Hi ✨, I'm interested in Pearl Facial. Can you share more details?",
    },
    {
      title: "O3+ D-Tan (Face)",
      subtitle: "Bright & tan-free skin",
      Icon: FaBrush,
      more:
        "Hi 🌞, I'm interested in O3+ D-Tan (Face). Can you share more details?",
    },
    {
      title: "Manicure",
      subtitle: "Perfect nails & hands",
      Icon: FaHandSparkles,
      more:
        "Hi 💅, I'm interested in Manicure. Can you share more details?",
    },
    {
      title: "Pedicure",
      subtitle: "Relaxing foot care",
      Icon: FaHandSparkles,
      more:
        "Hi 🦶, I'm interested in Pedicure. Can you share more details?",
    },
    {
      title: "Haircut",
      subtitle: "Trendy & classic styles",
      Icon: FaCut,
      more: "Hi 💇, I'm interested in Haircut. Can you share more details?",
    },
    {
      title: "Loreal Hair Spa",
      subtitle: "Deep hair nourishment",
      Icon: FaSpa,
      more:
        "Hi 💆, I'm interested in Loreal Hair Spa. Can you share more details?",
    },
    {
      title: "Full Arms D-Tan",
      subtitle: "Smooth & even skin tone",
      Icon: FaBrush,
      more:
        "Hi 🤲, I'm interested in Full Arms D-Tan. Can you share more details?",
    },
    {
      title: "Honey Wax",
      subtitle: "Gentle & natural waxing",
      Icon: FaLeaf,
      more: "Hi 🍯, I'm interested in Honey Wax. Can you share more details?",
    },
    {
      title: "Nail Art",
      subtitle: "Creative & stylish nail designs",
      Icon: FaHandshakeSimple,
      more:
        "Hi 🎨, I'm interested in Nail Art. Can you share more details?",
    },
    {
      title: "Chocolate Wax",
      subtitle: "Luxury waxing treatment",
      Icon: FaLeaf,
      more:
        "Hi 🍫, I'm interested in Chocolate Wax. Can you share more details?",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices =
    isMobile && !showAll ? services.slice(0, 4) : services;

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

const Card = ({ title, subtitle, Icon, more }) => {
  // ✅ Full international format for India
  const whatsappNumber = "7093331210";

  const handleEnquiry = () => {
    try {
      // const encodedMessage = encodeURIComponent(more);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${more}`;
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error("Error creating WhatsApp link:", error);
    }
  };

  return (
    <div className="w-full p-5 border border-red-600 relative overflow-hidden group bg-black shadow-md hover:shadow-red-600/50 transition-shadow duration-300">
      {/* Background hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      {/* Big faded icon in background */}
      <Icon className="absolute z-0 -top-10 -right-10 text-9xl text-red-900 opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-transform duration-300" />

      {/* Main icon */}
      <Icon className="mb-3 text-3xl text-red-500 group-hover:text-white relative z-10 transition-colors duration-300" />

      {/* Title */}
      <h3 className="font-semibold text-lg text-white relative z-10">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-400 group-hover:text-gray-100 relative z-10">
        {subtitle}
      </p>

      {/* Enquiry button */}
      <button
        onClick={handleEnquiry}
        className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition relative z-10"
      >
        Enquiry
      </button>
    </div>
  );
};

export default Service;
