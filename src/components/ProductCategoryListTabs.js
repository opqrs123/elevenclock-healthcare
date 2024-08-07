"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/utils/vars/categories';
import { apis } from '@/utils/vars/products/Active Pharmaceutical Ingredients';
import { acs } from '@/utils/vars/products/Agro_Chemicals';
import { efcs } from '@/utils/vars/products/Excipients & Fine Chemicals';
import { pps } from '@/utils/vars/products/Pharmaceutical Pellet\'s';
import { pcs } from '@/utils/vars/products/Phytochemicals';
const products = [...apis, ...acs, ...efcs, ...pps, ...pcs];

const newCategories = [
  { id: 0, name: 'All', img: 'apis' },
  ...categories
];

const CategoriesTab = ({ categoryId }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => 
      (activeCategory === 0 || product.categoryId === activeCategory) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.chemicalName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);

  const groupProductsByAlphabet = (products) => {
    return products.reduce((acc, product) => {
      const firstLetter = product.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(product);
      return acc;
    }, {});
  };

  const groupedProducts = groupProductsByAlphabet(filteredProducts);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 bg-sky-600">
          <h1 className="text-3xl font-bold text-white mb-4">Chemical Products Catalog</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto p-4" aria-label="Categories">
            {newCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center space-x-2 whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm transition-colors duration-200 rounded-lg
                  ${
                    activeCategory === category.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.name}</span>
              </motion.button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <AnimatePresence>
            {Object.keys(groupedProducts).length > 0 ? (
              <div
                key={activeCategory + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Object.entries(groupedProducts).sort().map(([letter, products]) => (
                  <div key={letter} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{letter}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {products.map((product, index) => (
                        <Link href={`/product/${encodeURIComponent(product.name)}`} key={product.name}>
                          <div
                            className="group bg-gray-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="font-sm text-lg text-blue-600 group-hover:underline">{product.name}</h3>
                              <ArrowUpRight className="text-gray-400 group-hover:text-blue-600" size={16} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center text-gray-500 mt-8"
              >
                No products found. Try adjusting your search or category.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTab;