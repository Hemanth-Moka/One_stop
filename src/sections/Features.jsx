import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, HeartHandshake, Brush } from 'lucide-react';

const features = [
  {
    title: 'AI Precision Cuts',
    desc: 'Smart-styled haircuts by pros — precision meets personal taste.',
    icon: Scissors,
    ringColor: 'bg-gradient-to-br from-red-500 via-red-700 to-black',
  },
  {
    title: 'Skin Glow Engine',
    desc: 'Clinical-grade facials with next-gen glow boosters.',
    icon: Sparkles,
    ringColor: 'bg-gradient-to-br from-red-400 via-pink-600 to-black',
  },
  {
    title: 'Family Plan',
    desc: 'Tailored experiences for men, women & kids in one place.',
    icon: HeartHandshake,
    ringColor: 'bg-gradient-to-br from-rose-500 via-red-600 to-black',
  },
  {
    title: 'Event Makeovers',
    desc: 'Party-perfect looks with digital styling previews.',
    icon: Brush,
    ringColor: 'bg-gradient-to-br from-red-600 via-red-500 to-black',
  },
];

export default function Features() {
  return (
    <section className="relative bg-black text-white py-28 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Subtle grid lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mt-0  mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-rose-500 to-red-700 text-transparent bg-clip-text"
        >
          Technology Meets Beauty
        </motion.h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
          Designed for the now. Styled for the next.
        </p>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group p-6 rounded-3xl border border-gray-800 bg-black/30 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_-10px_#f43f5e] transition-all"
              >
                {/* Glow Ring */}
                <div className={`absolute -z-10 w-40 h-40 ${f.ringColor} blur-2xl opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:scale-125`} />

                <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl border border-red-500/30 bg-red-500/10">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-red-500 transition">{f.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
