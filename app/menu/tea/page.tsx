"use client";
import { usePathname } from 'next/navigation'; // Use usePathname hook from 'next/navigation'
import Navbar from "../../components/navbar";
import Image from "next/image"; // Import Image for handling images
import Link from "next/link"; // Import Link for navigation

export default function Tea() {
  const pathname = usePathname(); // Get the current path

  // Function to check if the current link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#FFF8F3] min-h-screen">
      <Navbar />
      {/* Main Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-24 font-bold text-[#00704A]">TEA</h1>
        <p className="text-gray-500 font-sm mt-4">Freshly brewed teas with a touch of elegance</p>

        {/* Product Row (2 products per row) */}
        <div className="mt-8">
          <ul className="flex space-x-12 text-sm">
            <li>
              <Link
                href="/menu"
                className={`bg-white text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="/menu/hot-coffee"
                className={`bg-white text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/hot-coffee") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                HOT COFFEE
              </Link>
            </li>
            <li>
              <Link
                href="/menu/cold-coffee"
                className={`bg-white text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/cold-coffee") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                COLD COFFEE
              </Link>
            </li>
            <li>
              <Link
                href="/menu/tea"
                className={` text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/tea") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                TEA
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8 w-[60%]">
          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/img/green1.png"
                alt="Tea Product"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <h3 className="text-left text-md font-bold text-black mb-2">Green Tea Latte</h3>
            <p className="text-left text-sm text-gray-500 mb-4">
            Smooth and creamy matcha sweetened just right and served with steamed milk.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-md font-semibold text-[#00704A]">₱110</span>
              <div className="flex space-x-4">
                                <Link
                                    href="/cart"
                                    className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
                                >
                                    Add to Cart
                                </Link>
                                <Link
                                    href="/viewproduct"// Update this path to the specific product page
                                    className="border-[#00704A] border-2 text-[#00704A] px-4 py-2 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out"
                                >
                                    View
                                </Link>
                                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
