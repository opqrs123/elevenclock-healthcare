// components/GlobalPresence.js
"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import React from "react";
import Image from "next/image";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const colorByPresence = (countryCode) => {
  const presence = {
    USA: "fill-green-500",
    IND: "fill-blue-500",
    AUS: "fill-red-500"
    // Add other countries and their respective colors
  };
  return presence[countryCode] || "fill-gray-300";
};

export default function GlobalPresence() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>
        <div className="flex justify-center">
          <div className="flex justify-center py-10">
            <ComposableMap projectionConfig={{ scale: 200 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} className={colorByPresence(geo.properties.ISO_A3)} />)}
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}
