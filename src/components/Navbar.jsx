import React, { useState } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 bg-black sm:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between"> 
          <a href="/"className="flex shrink-0">
            <img
              className="w-15 h-15"
              src="/logoonestop.jpg"
              alt="OneStep Logo"
            />
          </a>
         

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-12">
            <a href="/service" className="text-base text-gray-400 transition hover:text-red-500"> Services </a>
            <a href="/Gallery" className="text-base text-gray-400 transition hover:text-red-500"> Gallery </a>
            <a href="/Pricing" className="text-base text-gray-400 transition hover:text-red-500"> Pricing </a>
            <a href="/OnestopGallery" className="text-base text-gray-400 transition hover:text-red-500"> OnestopGallery </a>
          </nav>
        </div>

        {expanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a href="/service" className="text-base text-gray-400 transition hover:text-red-500"> Services </a>
              <a href="/Gallery" className="text-base text-gray-400 transition hover:text-red-500"> Gallery </a>
              <a href="/Pricing" className="text-base text-gray-400 transition hover:text-red-500">  Pricing </a>
              <a href="/OnestopGallery" className="text-base text-gray-400 transition hover:text-red-500"> OnestopGallery </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
