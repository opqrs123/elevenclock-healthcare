"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/utils/vars/categories';
import { useParams } from 'next/navigation';
import { products } from '@/utils/vars/products';

// const products = [
//   { name: 'Acetone', chemicalName: 'Propanone', category: 'Solvents' },
//   { name: 'Benzene', chemicalName: 'Cyclohexa-1,3,5-triene', category: 'Aromatic Compounds' },
//   { name: 'Chloroform', chemicalName: 'Trichloromethane', category: 'Halogenated Compounds' },
//   { name: 'Ethanol', chemicalName: 'Ethyl alcohol', category: 'Alcohols' },
//   { name: 'Methanol', chemicalName: 'Methyl alcohol', category: 'Alcohols' },
//   { name: 'Toluene', chemicalName: 'Methylbenzene', category: 'Aromatic Compounds' },
//   { name: 'Hexane', chemicalName: 'n-Hexane', category: 'Alkanes' },
//   { name: 'Diethyl ether', chemicalName: 'Ethoxyethane', category: 'Ethers' },
// ];
 

const newCategories = [
  { id: 0, name: 'All',img:'apis'},
  ...categories
];

// Array.from(new Set(products.map(p => p.category))).map(category => ({
//     id: category.toLowerCase().replace(/\s+/g, '-'),
//     name: category,
//     icon: getCategoryIcon(category),
//   }))

// function getCategoryIcon(category) {
//   switch (category) {
//     case 'Solvents': return '💧';
//     case 'Aromatic Compounds': return '💍';
//     case 'Halogenated Compounds': return '🧂';
//     case 'Alcohols': return '🍸';
//     case 'Alkanes': return '⛽';
//     case 'Ethers': return '🔗';
//     default: return '🧪';
//   }
// }

const CategoriesTab = ({categoryId}) => {
  // const {categoryId} = useParams();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  // .toLowerCase().replace(/\s+/g, '-')
  
  useEffect(() => {
    const filtered = products.filter(product => 
      (activeCategory === 0 || product.categoryId === activeCategory) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.chemicalName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 bg-slate-300">
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
                {/* <span className="text-xl"><Image src={`/${category.img}.png`} width={20} height={20} alt="Company Logo" className="w-20 h-20" /></span> */}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              <motion.div
                key={activeCategory + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filteredProducts.map((product, index) => (
                  <Link href={`/product/${encodeURIComponent(product.name)}`}><motion.div
                    key={product.name}
                    className="bg-gray-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                    {/* <p className="text-sm text-gray-600">{product.chemicalName}</p>
                    <p className="text-xs text-blue-600 mt-2 bg-blue-100 inline-block px-2 py-1 rounded-full">{product.category}</p> */}
                  </motion.div>
                  </Link>
                ))}
              </motion.div>
              
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