import '../app/globals.css'
// pages/product/[name].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowBigLeft, ArrowLeftCircle, ArrowLeftCircleIcon } from 'lucide-react';

export default function ProductNavbar(props){
    return(
        <div className="flex justify-between items-center mb-6">
        <Link href="/products/0" className="group flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <div className="relative">
              <ArrowLeftCircleIcon 
                className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                strokeWidth={1.3}
              />
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </div>
            <span className="font-semibold">Back</span>
          </Link>
          <nav className="text-sm font-medium">
            <ol className="list-none p-0 inline-flex">
             <li className="flex items-center">
                <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
              </li>
              {props.isProductpage && <li className="flex items-center">
                <span className="text-gray-700" aria-current="page">{props.product.category}</span>
                {/* <Link href={`/category/${props.product.category}`} className="text-gray-500 hover:text-gray-700">{props.product.category}</Link> */}
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
              </li>}
              {props.isProductpage && <li>
                <span className="text-gray-700" aria-current="page">{props.product.name}</span>
              </li>}
            </ol>
          </nav>
        </div>
    )
}