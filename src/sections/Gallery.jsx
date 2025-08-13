import React from "react";

export default function Gallery() {
  const images = [
    "IMG-20250812-WA0002.jpg",
    "IMG-20250812-WA0004.jpg",
    "IMG-20250812-WA0006.jpg",
    "IMG-20250812-WA0007.jpg",
    "IMG-20250812-WA0008.jpg",
    "IMG-20250812-WA0009.jpg",
    "IMG-20250812-WA0010.jpg",
    "IMG-20250812-WA0011.jpg",
    "IMG-20250812-WA0012.jpg",
    "IMG-20250812-WA0013.jpg",
    "IMG-20250812-WA0014.jpg",
    "IMG-20250812-WA0015.jpg",
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-500 mb-10 border-b border-red-700 pb-2">
          Gallery & Services.
        </h1>

        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-20xl shadow-lg border border-red-700"
            >
              <img
                src={`/images/${img}`}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                <p className="text-white text-sm tracking-wide">
                  Salon Moment {index + 1}
                </p>
              </div>
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 ring-0 group-hover:ring-4 group-hover:ring-red-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
