// pages/product/[name].js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Mock data (replace with actual data fetching in a real application)
const products = [
  {
    name: 'Acetone',
    chemicalName: 'Propanone',
    description: 'A colorless, volatile, flammable liquid widely used as an organic solvent.',
    image: '/images/acetone.jpg',
    category:'APIs',
    info: {
      IUPACName: '2-Propanone',
      CASNumber: '67-64-1',
      MolecularFormula: 'C3H6O',
      Synonyms: 'Dimethyl ketone, β-Ketopropane',
      Application: 'Used in the production of plastics, fibers, drugs, and other chemicals. Also used as a solvent for cleaning and degreasing.',
    }
  },
  // Add more products...
];

export default function ProductDetails() {
  const router = useRouter();
  const { name } = router.query;

  const product = products.find(p => p.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <Link href="/">
            <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
              ← Back to Listing
            </button>
          </Link>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-indigo-800 mb-2">{product.name}</h1>
              <h2 className="text-xl text-indigo-600 mb-4">{product.chemicalName}</h2>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Additional Information:</h3>
                <dl className="grid grid-cols-1 gap-4">
                  {Object.entries(product.info).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="font-medium text-indigo-600">{key}</dt>
                      <dd className="text-gray-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}