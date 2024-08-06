"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

const presenceCountries = [
  { name: 'Mexico', coordinates: [-102, 23] },
  { name: 'Brazil', coordinates: [-55, -10] },
  { name: 'Argentina', coordinates: [-64, -34] },
  { name: 'Colombia', coordinates: [-74, 4] },
  { name: 'Peru', coordinates: [-75, -10] },
  { name: 'Chile', coordinates: [-71, -30] },
  { name: 'China', coordinates: [105, 35] },
  { name: 'India', coordinates: [78, 21] },
  { name: 'Belize', coordinates: [-88.5, 17.2] },
  { name: 'Bolivia', coordinates: [-65, -17] },
  { name: 'Costa Rica', coordinates: [-84, 10] },
  { name: 'Cuba', coordinates: [-80, 22] },
  { name: 'Dominican Republic', coordinates: [-70.5, 19] },
  { name: 'Ecuador', coordinates: [-78.5, -1.8] },
  { name: 'El Salvador', coordinates: [-88.9, 13.8] },
  { name: 'Guatemala', coordinates: [-90.2, 15.8] },
  { name: 'Guyana', coordinates: [-58.9, 4.9] },
  { name: 'Haiti', coordinates: [-72.3, 19] },
  { name: 'Honduras', coordinates: [-86.5, 15] },
  { name: 'Nicaragua', coordinates: [-85.2, 12.9] },
  { name: 'Panama', coordinates: [-80.8, 8.5] },
  { name: 'Paraguay', coordinates: [-58.4, -23.4] },
  { name: 'Puerto Rico', coordinates: [-66.5, 18.2] },
  { name: 'Suriname', coordinates: [-56, 4] },
  { name: 'Uruguay', coordinates: [-56, -33] },
  { name: 'Venezuela', coordinates: [-66.9, 7] },
];

const GlobalPresence = () => {
  const [content, setContent] = useState('');

  return (
    <section id="globalpresence" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">
            Our Global Network
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-xl text-left mb-12 text-gray-600">Connecting Latin America, China, and India</p>
        </motion.div>
        
        <div className="relative bg-white rounded-lg shadow-lg p-4">
          <ComposableMap
            projection="geoMercator"
            className="w-full h-[600px]"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isPresent = presenceCountries.some(
                    (country) => country.name === geo.properties.name
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isPresent ? '#3B82F6' : '#E5E7EB'}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: isPresent ? '#2563EB' : '#D1D5DB' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {presenceCountries.map((country) => (
              <Marker key={country.name} coordinates={country.coordinates}>
                <circle r={4} fill="#EF4444" stroke="#FFFFFF" strokeWidth={2} />
                <circle
                  r={10}
                  fill="#EF4444"
                  stroke="none"
                  opacity={0.1}
                  onMouseEnter={() => {
                    setContent(country.name);
                  }}
                  onMouseLeave={() => {
                    setContent('');
                  }}
                />
              </Marker>
            ))}
          </ComposableMap>
          {content && (
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md shadow-md text-sm">
              {content}
            </div>
          )}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Global Reach</h3>
          <p className="text-gray-600">
            Our company has established a strong presence across Latin America, China, and India, 
            positioning us at the forefront of emerging markets. This extensive network allows us 
            to tap into diverse resources, understand regional market dynamics, and provide tailored 
            solutions to our global clientele. Our presence spans numerous countries, enabling us to 
            serve a wide range of markets and cultures effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;