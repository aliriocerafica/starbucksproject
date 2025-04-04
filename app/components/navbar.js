
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { User, ShoppingCart, Settings, LogOut, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/img/starbucks.png" alt="Starbucks Logo" width={40} height={40} />
        </div>

        {/* Center Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/home" className="text-gray-800 hover:text-green-600">Home</Link>
          <Link href="/main" className="text-gray-800 hover:text-green-600">About</Link>
          <Link href="/menu" className="text-gray-800 hover:text-green-600">Menu</Link>
          <Link href="/contact" className="text-gray-800 hover:text-green-600">Contact</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative">
            <User
              className="w-6 h-6 text-gray-800 cursor-pointer hover:text-green-600"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
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

          {/* Hamburger Icon (Visible on mobile) */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800 cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 cursor-pointer" onClick={toggleMobileMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-2">
          <Link href="/home" className="block text-gray-800 hover:text-green-600">Home</Link>
          <Link href="/main" className="block text-gray-800 hover:text-green-600">About</Link>
          <Link href="/menu" className="block text-gray-800 hover:text-green-600">Menu</Link>
          <Link href="/contact" className="block text-gray-800 hover:text-green-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
