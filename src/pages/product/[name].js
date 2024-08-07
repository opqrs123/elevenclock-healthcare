// pages/product/[name].js
import '../../app/globals.css'
// pages/product/[name].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowBigLeft, ArrowLeftCircle, ArrowLeftCircleIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductNavbar from '@/components/ProductNavbar';
import { products } from '@/utils/vars/products';

// Mock data (replace with actual data fetching in a real application)


export default function ProductDetails() {
  const router = useRouter();
  const { name } = router.query;
  // console.log(name)

  const product = products.find(p => p.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductNavbar isProductpage={true} product={product} />

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.chemicalName}</div>
              <h1 className="mt-1 text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          </div>
          <div className="md:flex justify-center">
              <img className="h-48 w-full object-cover md:w-48 justify-center" src={product.image} alt={product.name} />
            </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {Object.entries(product.info).map(([key, value]) => (
                <div key={key} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}