import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="flex items-center mb-6">
              <Image src="/logo.png" width={200} height={40} alt="Mediclock Logo" className="mr-4" />
            </div>
            <p className="mb-6 text-white-300">
              Elevenclock Healthcare isn't just a name, it's a heartbeat. We beat with the rhythm of advancement, the drone of research, and the consistent beat of high-quality medications.
            </p>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Active Pharmaceutical Ingredients', 'Agro Chemicals', 'Excipients & Fine Chemicals', 'Pharmaceutical Pellets', 'Phytochemicals'].map((item) => (
                <li key={item}><a href="#" className="hover:underline hover:text-gray-200 transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Global Presence', 'Blog', 'Contacts'].map((item) => (
                <li key={item}><a href="#" className="hover:underline hover:text-gray-200 transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Office Address:</h4>
                <p className="text-base">B-1308, Ganesh Glory 11, Gota, Ahmedabad, Gujarat - 382481</p>
              </div>
              <div>
                <p>Email: <a href="mailto:sales@elevenclockhealthcare.com" className="hover:underline">sales@elevenclockhealthcare.com</a></p>
                <p>Phone: <a href="tel:+919909097015" className="hover:underline">+919909097015</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Payment Methods */}
        <div className="mt-12 pt-6 border-t border-blue-400 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Elevenclock Healthcare - All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['visa'].map((card) => (
              <Image  width={250} height={20} key={card} src={`/cards.png`} alt={`${card} logo`} className="h-8" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
