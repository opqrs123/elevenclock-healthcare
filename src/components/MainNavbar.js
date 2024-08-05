// components/MainNavbar.js
import "../app/globals.css";
export default function MainNavbar() {
  return (
    <nav className="bg-cyan-400 shadow-md">
      <div className="container mx-auto py-4">
        <ul className="flex justify-right space-x-6">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Global Presence
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
