"use client";
import Navbar from "../components/navbar"; // Ensure this is correct relative to the file location
import { usePathname } from 'next/navigation'; // Use usePathname hook from 'next/navigation'
import Link from "next/link";
import Image from "next/image"; // Import Image for handling images

export default function Menu() {
    const pathname = usePathname(); // Get the current path

    // Function to check if the current link is active
    const isActive = (path: string) => pathname === path;
    return (
        <div className="bg-[#FFF8F3] min-h-screen">
            <Navbar />

            {/* Main Section */}
            <div className="flex flex-col items-center ">
                <h1 className="text-5xl mt-24 font-bold text-[#00704A]">MENU</h1>
                <p className="text-gray-500 font-sm mt-4">Handcrafted beverages made with love</p>

                {/* Sub Navbar */}
                <div className="mt-8">
          <ul className="flex space-x-12 text-sm">
            <li>
              <Link
                href="/menu"
                className={` text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="/menu/hot-coffee"
                className={` bg-white text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/hot-coffee") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                HOT COFFEE
              </Link>
            </li>
            <li>
              <Link
                href="/menu/cold-coffee"
                className={`bg-white  text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/cold-coffee") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                COLD COFFEE
              </Link>
            </li>
            <li>
              <Link
                href="/menu/tea"
                className={`bg-white  text-[#00704A] hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out px-6 py-3 rounded-full ${
                  isActive("/menu/tea") ? "bg-[#00704A] text-white" : ""
                }`}
              >
                TEA
              </Link>
            </li>
          </ul>
        </div>

                {/* Product Row (2 products per row) */}
                <div className="grid grid-cols-2 gap-8 mt-8 w-[60%]">
                    {/* Box 1 */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/img/green1.png"
                                alt="Product 1"
                                width={250}
                                height={250}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-left text-md font-bold text-black mb-2">Product Name 1</h3>
                        <p className="text-left text-sm  text-gray-500 mb-4">
                            A short description of the product goes here. It gives customers an idea of what it is.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-md font-semibold text-[#00704A]">₱19.99</span> {/* Updated currency to Peso */}
                            <div className="flex space-x-4">
                                <Link
                                    href="/cart"
                                    className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
                                >
                                    Add to Cart
                                </Link>
                                <Link
                                    href="/viewproduct" // Update this path to the specific product page
                                    className="border-[#00704A] border-2 text-[#00704A] px-4 py-2 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out"
                                >
                                    View
                                </Link>
                                </div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/img/caramel2.png"
                                alt="Product 2"
                                width={250}
                                height={250}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-left text-md font-bold text-black mb-2">Product Name 2</h3>
                        <p className="text-left text-sm  text-gray-500 mb-4">
                            A short description of the product goes here. It gives customers an idea of what it is.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-md font-semibold text-[#00704A]">₱24.99</span> {/* Updated currency to Peso */}
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

                    {/* Box 3 */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/img/capuccino1.png"
                                alt="Product 3"
                                width={150}
                                height={150}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-left text-md font-bold text-black mb-2">Product Name 3</h3>
                        <p className="text-left text-sm  text-gray-500 mb-4">
                            A short description of the product goes here. It gives customers an idea of what it is.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-md font-semibold text-[#00704A]">₱29.99</span> {/* Updated currency to Peso */}
                            <div className="flex space-x-4">
                                <Link
                                    href="/cart"
                                    className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
                                >
                                    Add to Cart
                                </Link>
                                <Link
                                   href="/viewproduct" // Update this path to the specific product page
                                    className="border-[#00704A] border-2 text-[#00704A] px-4 py-2 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out"
                                >
                                    View
                                </Link>
                                </div>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/img/caramel1.png"
                                alt="Product 4"
                                width={250}
                                height={250}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-left text-md font-bold text-black mb-2">Product Name 4</h3>
                        <p className="text-left text-sm  text-gray-500 mb-4">
                            A short description of the product goes here. It gives customers an idea of what it is.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-md font-semibold text-[#00704A]">₱34.99</span> {/* Updated currency to Peso */}
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
