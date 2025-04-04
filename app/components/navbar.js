"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { User, ShoppingCart, Settings, LogOut } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center ml-6">
        <Image src="/img/starbucks.png" alt="Starbucks Logo" width={40} height={40} />
      </div>

      {/* Center Links */}
      <div className="flex space-x-6">
        <Link href="/home" className="text-gray-800 hover:text-green-600">Home</Link>
        <Link href="/main" className="text-gray-800 hover:text-green-600">About</Link>
        <Link href="/menu" className="text-gray-800 hover:text-green-600">Menu</Link>
        <Link href="/contact" className="text-gray-800 hover:text-green-600">Contact</Link>
      </div>

      {/* Profile Icon with Dropdown */}
      <div className="relative mr-6">
        <User className="w-6 h-6 text-gray-800 cursor-pointer hover:text-green-600" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-50 bg-white rounded-md shadow-lg">
            <Link href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
              <ShoppingCart className="w-4 h-4 mr-2" /> Orders
            </Link>
            <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
              <Settings className="w-4 h-4 mr-2" /> Profile Settings
            </Link>
            <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
