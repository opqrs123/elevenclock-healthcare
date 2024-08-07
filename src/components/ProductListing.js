"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Package, ChevronLeft, ChevronRight, Box, Gift, Layers, ShoppingBag } from "lucide-react";

const icons = [Box, Gift, Layers, ShoppingBag, Package];

export default function ProductListing() {
  const categories = [
    { id: 1, name: "Active Pharmaceutical Ingredients (APIs)", description: "Coming Soon..", icon: icons[0], color: "blue", img: "apis" },
    { id: 2, name: "Agro Chemicals", description: "Coming Soon..", icon: icons[1], color: "green", img: "agro" },
    { id: 3, name: "Excipients & Fine Chemicals", description: "Coming Soon..", icon: icons[2], color: "red", img: "chemical" },
    { id: 4, name: "Pharmaceutical Pellets", description: "Coming Soon..", icon: icons[3], color: "purple", img: "capsule" },
    { id: 5, name: "Phytochemicals", description: "Coming Soon..", icon: icons[4], color: "yellow", img: "plant" },
  ];

  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;
  const pageCount = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const scroll = () => {
      if (currentPage >= pageCount - 1) {
        setCurrentPage(0);
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        setCurrentPage((prev) => prev + 1);
        carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
      }
    };

    if (isAutoScrolling) {
      scrollInterval = setInterval(scroll, 3000);
    }

    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling, currentPage, pageCount]);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.clientWidth;
    if (direction === "left") {
      setCurrentPage((prev) => Math.max(0, prev - 1));
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
    carouselRef.current.scrollTo({ left: index * carouselRef.current.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-gradient-to-r from-cyan-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
        <div className="relative" onMouseEnter={() => setIsAutoScrolling(false)} onMouseLeave={() => setIsAutoScrolling(true)}>
          <div ref={carouselRef} className="flex overflow-hidden scroll-smooth" style={{ scrollSnapType: "x mandatory" }}>
            {categories.map((product) => (
              <div key={product.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 cursor-pointer" style={{ scrollSnapAlign: "start" }} onClick={() => handleProductClick(product)}>
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-${product.color}-500 aspect-square flex flex-col justify-center items-center`}>
                  <div className="mb-3">
                    <Image src={`/${product.img}.png`} width={250} height={20} alt="Company Logo" className="w-20 h-20" />
                  </div>
                  <h3 className="text-xl text-center p-1 text-gray-800">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-r-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-l-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage ? "bg-blue-500 w-6" : "bg-gray-300"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {activeProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{activeProduct.name}</h3>
            <p className="text-gray-600 mb-6">{activeProduct.description}</p>
            <button onClick={() => setActiveProduct(null)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
