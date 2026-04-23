"use client";
import Link from "next/link";
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
      <ul className="hidden md:flex space-x-6 items-center">

  <Link href="/">
    <li className="hover:text-[#D4AF37] cursor-pointer">Home</li>
  </Link>

  <Link href="/menspage">
    <li className="hover:text-[#D4AF37] cursor-pointer">Mens</li>
  </Link>

  <Link href="/womanspage">
    <li className="hover:text-[#D4AF37] cursor-pointer">Womens</li>
  </Link>

  <Link href="/kidspage">
    <li className="hover:text-[#D4AF37] cursor-pointer">Kids</li>
  </Link>

  <Link href="/gift">
    <li className="hover:text-[#D4AF37] cursor-pointer">Gift Pack</li>
  </Link>

  <Link href="/others">
    <li className="hover:text-[#D4AF37] cursor-pointer">Others</li>
  </Link>

  <Link href="/about">
    <li className="hover:text-[#D4AF37] cursor-pointer">About Us</li>
  </Link>

  <Link href="/contactus">
    <li className="hover:text-[#D4AF37] cursor-pointer">Contact Us</li>
  </Link>

</ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer hover:text-pink-400" />
        <FaUser className="cursor-pointer hover:text-pink-400" />
      </div>
    </nav>
  );
}
