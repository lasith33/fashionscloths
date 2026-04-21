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
        <span className="text-white font-semibold text-lg"><span className="text-[#D4AF37]">Galle</span>style</span>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-pink-400 cursor-pointer">Home</li>
        <li className="hover:text-pink-400 cursor-pointer">Mens</li>
        <li className="hover:text-pink-400 cursor-pointer">Womans</li>
        <li className="hover:text-pink-400 cursor-pointer">Kids</li>
        <li className="hover:text-pink-400 cursor-pointer">Gift Pack</li>
        <li className="hover:text-pink-400 cursor-pointer">Others</li>
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
