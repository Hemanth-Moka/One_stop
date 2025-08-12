import React, { useState } from 'react';
import Features from './Features';
import Gallery from './Gallery';
import Services1 from './Services1';
import Services from './Service'


const Hero = () => {
  return (
    <>
      

      <div>
        <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-15">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="lg:w-2/3">
                <p className="text-sm tracking-widest text-red-400 uppercase">Luxury Salon Experience</p>
                <h1 className="mt-6 text-4xl text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-700">
                    OneStop
                  </span>{' '}
                  – Complete Family Salon
                </h1>
                <p className="max-w-lg mt-4 text-xl text-gray-400 sm:mt-8">
                  Where style meets elegance. Discover personalized grooming and care for every member of your family.
                </p>

                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-red-500 to-rose-700 group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base text-white bg-black border border-transparent rounded-full"
                  >
                    Book Your Appointment
                  </a>
                </div>

                <div>
                  <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                        stroke="url(#a)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="3"
                          y1="7.00003"
                          x2="22.2956"
                          y2="12.0274"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#be123c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="ml-2 text-base text-white"> 120+ happy customers this week </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-0 md:absolute md:top-32 lg:top-0 md:right-0">
                <img
                  className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                  src="/Hero1.png"
                  alt="Salon model"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Gallery /> */}
      <Services1/>
      <Services/>
      {/* <Features /> */}
    </>
  );
};

export default Hero;
