import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function TopNavbar() {
  return (
    <nav className="bg-white-800 text-black p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image src="/logo.png" width={250} height={20} alt="Company Logo" className="mr-2" />
          {/* <span className="text-xl font-bold">Company Name</span> */}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <span className="text-sm">+91 9909097015</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span className="text-sm">info@elevenclockhealthcare.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
