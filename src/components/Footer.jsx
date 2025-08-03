import React from 'react';

export default function Footer() {
  return (
    <section className="py-12 bg-black text-gray-200 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-14" src="/salon_logo.png" alt="One Step Salon" />
            <p className="text-base leading-relaxed text-gray-400 mt-7">
              One Step is your neighborhood unisex family salon — blending modern style with warm care. Haircuts, grooming, facials & more under one roof.
            </p>

            {/* Social Icons */}
            <ul className="flex items-center space-x-4 mt-9">
              {['#', '#', '#'].map((link, i) => (
                <li key={i}>
                  <a href={link} aria-label="Social" className="text-gray-300 hover:text-red-500 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Services</p>
            <ul className="mt-6 space-y-4">
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Haircuts</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Facials</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Hair Spa</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Kids & Family</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">About</p>
            <ul className="mt-6 space-y-4">
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Our Story</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Meet the Team</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Testimonials</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Booking / Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Book an Appointment</p>
            <form className="mt-6">
              <input
                type="text"
                placeholder="Your Phone or Email"
                className="block w-full p-4 text-gray-200 placeholder-gray-400 transition bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="w-full py-3 mt-3 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-12 mb-6 border-gray-700" />
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} One Step Unisex Salon. Designed by Hemanth Moka. All rights reserved.
        </p>
      </div>
    </section>
  );
}
