"use client";

import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function HotCoffee() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#FFF8F3] min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl mt-24 font-bold text-[#00704A] text-center">HOT COFFEE</h1>
        <p className="text-gray-500 text-sm sm:text-base mt-4 text-center">
          Warm, comforting coffee made just for you
        </p>

        {/* Button Nav */}
        <div className="mt-6 md:mt-8 w-full">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-sm">
            {[
              { label: "All", href: "/menu" },
              { label: "HOT COFFEE", href: "/menu/hot-coffee" },
              { label: "COLD COFFEE", href: "/menu/cold-coffee" },
              { label: "TEA", href: "/menu/tea" }
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition duration-300 ease-in-out ${
                    isActive(href)
                      ? "bg-[#00704A] text-white"
                      : "bg-white text-[#00704A] hover:bg-[#00704A] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10 w-full max-w-5xl px-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Image
                src="/img/green1.png"
                alt="Hot Coffee Product 1"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-bold text-black mb-2">Espresso</h3>
            <p className="text-sm text-gray-500 mb-4">
              A strong and bold espresso made with premium beans.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-md font-semibold text-[#00704A]">₱19.99</span>
              <div className="flex space-x-2 sm:space-x-4">
                <Link
                  href="/cart"
                  className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out text-sm"
                >
                  Add to Cart
                </Link>
                <Link
                  href="/viewproduct"
                  className="border-[#00704A] border-2 text-[#00704A] px-4 py-2 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out text-sm"
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
