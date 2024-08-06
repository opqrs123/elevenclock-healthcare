"use client"
import React from 'react';
import { ArrowRight, Activity, Shield, Users } from 'lucide-react';

export default function HomeSection() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('./home_section.jpg')",
        height: "75vh" // Increased height for more impact
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="container mx-auto text-left relative z-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            ElevenClock <span className="text-cyan-400">Healthcare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Your Trusted Source for Premium Active Pharmaceutical Ingredients and Bulk Drugs
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-lg font-semibold shadow-lg flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 text-lg font-semibold shadow-lg">
              Contact Us
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Activity, text: "High-Quality Products" },
              { icon: Shield, text: "Rigorous Quality Control" },
              { icon: Users, text: "Expert Team" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <item.icon className="h-8 w-8 text-cyan-400 mr-3" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}