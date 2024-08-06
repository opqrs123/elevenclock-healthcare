"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">
            About Elevenclock Healthcare
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              Elevenclock Healthcare, based in Ahmedabad, is an emerging leader and premier supplier of high-quality Active Pharmaceutical Ingredients (APIs), Agro Chemicals, Excipients & Fine Chemicals, Pharmaceutical Pellets, and Phytochemicals. With a commitment to excellence and a focus on innovation, we strive to meet the evolving needs of the healthcare and agricultural industries. Our dedicated team of professionals works tirelessly to ensure that every product we deliver meets the highest standards of quality and safety.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
            At ElevenClock Healthcare, we understand the critical role that APIs and related products play in the development and production of life-saving medications and agricultural advancements.We take pride in our ability to offer customized solutions that align with the specific needs of our clients, from small-scale developers to large pharmaceutical and agricultural companies.

Choose ElevenClock Healthcare for your API, agro chemical, excipient, fine chemical, pharmaceutical pellet, and phytochemical needs, and experience the difference that our expertise, reliability, and commitment to quality can make in your journey towards success.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/about1.jpg" alt="Advanced medical equipment" className="rounded-lg shadow-lg" />
              <img src="/about2.jpg" alt="Modern healthcare facility" className="rounded-lg shadow-lg mt-8" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">Innovating</div>
              <div className="text-xl text-gray-700">Healthcare Solutions</div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Innovative Products', value: 'In Development', icon: Zap, color: 'from-blue-400 to-blue-600' },
            { title: 'Market Potential', value: 'Global Reach', icon: Target, color: 'from-indigo-400 to-indigo-600' },
            { title: 'Growth Vision', value: 'Rapid Expansion', icon: Rocket, color: 'from-purple-400 to-purple-600' },
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-r ${stat.color} p-8 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300`}>
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.title}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;