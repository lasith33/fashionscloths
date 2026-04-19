"use client";
import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-8 py-4 flex items-center justify-between z-50 shadow-lg">

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <span className="text-pink-300 font-semibold text-lg">Floral Haven</span>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-pink-400 cursor-pointer">Home</li>
        <li className="hover:text-pink-400 cursor-pointer">Shop</li>
        <li className="hover:text-pink-400 cursor-pointer">Occasions</li>
        <li className="hover:text-pink-400 cursor-pointer">About Us</li>
        <li className="hover:text-pink-400 cursor-pointer">Contact Us</li> 

      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer hover:text-pink-400" />
        <FaUser className="cursor-pointer hover:text-pink-400" />
      </div>
    </nav>
  );
}
