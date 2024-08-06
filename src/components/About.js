"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, User } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
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
          {/* <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Your Trusted Source for High-Quality Pharmaceuticals
          </h2> */}
          <p className="mb-4 text-gray-700">
            Quality confirmation ensures that medicine export from India is safe and successful. 
            It also guarantees that we follow the guidelines. It implies we meet top-quality 
            standards and all requirements set by the government authority. This helps people 
            use our products with confidence and trust in the medicines.
          </p>
          <p className="text-gray-700">
            To save and further develop patient&apos;s wellbeing by consistently delivering high 
            quality, protected and effective drug products and services. That meets client 
            expectations across the globe through an efficient workforce, cutting-edge 
            innovations, skilled labor force and effective management. Our unwavering 
            commitment to excellence, from formulation to packaging, ensures that our 
            pharmaceutical products are safe and effective.
          </p>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/lab.jpg" 
            width={500}
            height={500}
            alt="Pharmaceutical Lab" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white h-auto rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
            <MapPin className="mr-2" /> Address
          </h3>
          <p className="mb-7">314, Silver Trade Center, VIP Cir, near Moon Garden, Uttran, Surat, Gujarat 394105</p>
          <p className="flex items-center">
            <Phone className="mr-2 text-blue-600" />
            +91 9726073634
          </p>
          <div className="bg-white p-6 ">
        {/* <h3 className="text-xl font-semibold mb-4 text-blue-600">Location</h3> */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.531172887079!2d72.53775607631549!3d23.11425207910971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8340ebe5d7cb%3A0x4b3ffb517276bef6!2sGanesh%20Glory%2011!5e0!3m2!1sen!2sin!4v1722937871816!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
           </div>
      </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
            <Clock className="mr-2" /> Hours
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <React.Fragment key={day}>
                <p className={index >= 5 ? 'text-red-600 font-medium' : 'font-medium'}>{day}</p>
                <p className={index >= 5 ? 'text-red-600' : ''}>
                  {index === 6 ? '11:00 a.m. - 7:00 p.m.' : '10:00 a.m. - 8:00 p.m.'}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
            <User className="mr-2" /> Our Directors
          </h3>
          {['Pratik Patel', 'Ruturajsinh Kumpavat', 'Nayan Patel', 'Hitesh Patel'].map((director) => (
            <div key={director} className="mb-4">
              <h4 className="font-medium">{director}</h4>
              <p className="text-sm text-gray-600">Director of Operations</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AboutUsSection;