// components/MainNavbar.js
"use client"
import "../app/globals.css";
import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingCart, Briefcase, Globe, Menu, X } from 'lucide-react';

const NavItem = ({ item, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  return (
    <li 
      className={`relative group ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-cyan-500 hover:text-white rounded-md transition-colors duration-200 cursor-pointer"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <a href={item.href}>{item.label}</a>
        {item.children && (
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </div>
      {item.children && (
        <ul className={`bg-white rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobile 
            ? `mt-1 w-full ${isOpen ? 'max-h-96' : 'max-h-0'}`
            : `absolute left-0 mt-1 w-56 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
        }`}>
          {item.children.map((child, index) => (
            <li key={index} className="relative">
              <a
                href={child.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors duration-200 flex items-center"
              >
                {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                <span>{child.label}</span>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 84);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: 'products',
      children: [
        { label: 'Active Pharmaceutical Ingredients (APIs)', href: '#' },
        { label: 'Agro Chemicals', href: '#' },
        { label: 'Excipients & Fine Chemicals', href: '#' },
        { label: 'Pharmaceutical Pellets', href: '#' },
        { label: 'Phytochemicals', href: '#' },
      ],
    },
    { label: 'About', href: 'about' },
    // {
    //   label: 'Services',
    //   href: 'services',
    //   children: [
    //     { label: 'Consulting', href: 'consulting', icon: Briefcase },
    //     { label: 'Design', href: 'design', icon: Briefcase },
    //     { label: 'Development', href: 'development', icon: Briefcase },
    //   ],
    // },
    {
      label: 'Global Presence',
      href: '#globalpresence',
      // children: [
      //   { label: 'North America', href: 'north-america', icon: Globe },
      //   { label: 'Europe', href: 'europe', icon: Globe },
      //   { label: 'Asia Pacific', href: 'asia-pacific', icon: Globe },
      // ],
    },
  ];

  return (
    <nav className={`transition-all duration-300 ${
      isSticky 
        ? 'text-white fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md z-20'
        : 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
    }`}>
      <div className="container mx-auto px-4 text-white">
        <div className="flex justify-between items-center py-4 md:hidden">
          {/* <a href="#" className={`font-bold text-xl ${isSticky ? 'text-cyan-500' : 'text-white'}`}>Logo</a> */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${isSticky ? 'text-cyan-500' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:justify-start md:space-x-2 md:py-2 ${
          isMobile ? (isMenuOpen ? 'block' : 'hidden') : 'flex'
        }`}>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} isMobile={isMobile} />
          ))}
        </ul>
      </div>
    </nav>
  );
}