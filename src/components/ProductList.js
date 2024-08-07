// pages/index.js
import { useState } from 'react';
import ProductNavbar from './ProductNavbar';
import Link from 'next/link';

// Mock data (replace with actual data fetching in a real application)
const products = [
  { name: 'Acetone', chemicalName: 'Propanone' },
  { name: 'Benzene', chemicalName: 'Cyclohexa-1,3,5-triene' },
  { name: 'Chloroform', chemicalName: 'Trichloromethane' },
  { name: 'Ethanol', chemicalName: 'Ethyl alcohol' },
  // Add more products...
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen p-8">
       
      <div className="max-w-4xl mx-auto">
      <ProductNavbar isProductpage={false} />
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Chemical Product Catalog</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition duration-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${encodeURIComponent(product.name)}`} key={product.name}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-indigo-700 mb-2">{product.name}</h2>
                  <p className="text-gray-600">{product.chemicalName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}