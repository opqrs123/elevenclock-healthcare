"use client"
import React from 'react';
import { ArrowRight, Activity, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center min-h-screen"
      style={{
        backgroundImage: "url('./home_section.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="container mx-auto text-left relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            ElevenClock <span className="text-cyan-400">Healthcare</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            Your Trusted Source for Premium Active Pharmaceutical Ingredients and Bulk Drugs
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/products/0`}><button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg font-semibold shadow-lg flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button></Link>
            <Link href={`/about`}><button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg font-semibold shadow-lg">
              Contact Us
            </button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Activity, text: "High-Quality Products" },
              { icon: Shield, text: "Rigorous Quality Control" },
              { icon: Users, text: "Expert Team" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 transition duration-300 hover:bg-white/20">
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}