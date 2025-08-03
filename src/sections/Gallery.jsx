import React from 'react';

const galleryData = [
  { color: 'bg-purple-500', img: '/avatars/1.png' },
  { color: 'bg-orange-500', img: '/avatars/2.png' },
  { color: 'bg-green-500', img: '/avatars/3.png' },
  { color: 'bg-yellow-500', img: '/avatars/4.png' },
  { color: 'bg-sky-500', img: '/avatars/5.png' },
  { color: 'bg-red-500', img: '/avatars/6.png' },
];

export default function Gallery() {
  return (
    <section className="bg-[#392DDD] py-20 px-4 sm:px-6 lg:px-10 rounded-b-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Explore our gallery of works</h2>
        <p className="text-indigo-100 max-w-xl mx-auto mb-12 text-base sm:text-lg">
          Discover unique avatars created with passion and pixel-perfect detail.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-6">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`aspect-[3/4] rounded-lg flex items-center justify-center ${item.color}`}
          >
            <img src={item.img} alt={`avatar-${index}`} className="h-[85%] object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
