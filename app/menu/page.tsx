"use client";
import Navbar from "../components/navbar";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="bg-[#FFF8F3] min-h-screen">
            <Navbar />

            {/* Main Section */}
            <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mt-16 md:mt-24 font-bold text-[#00704A] text-center">MENU</h1>
                <p className="text-gray-500 text-sm sm:text-base mt-4 text-center">Handcrafted beverages made with love</p>

                {/* Sub Navbar */}
                <div className="mt-6 md:mt-8 w-full h-auto">
                    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 text-sm px-4">
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

                {/* Product Grid (Always 2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 w-full max-w-5xl">
                    {[
                        {
                            name: "Green Tea Latte",
                            desc: "Smooth and creamy matcha sweetened just right and served with steamed milk.",
                            price: "₱110",
                            image: "/img/green1.png"
                        },
                        {
                            name: "Iced Caramel Macchiato",
                            desc: "Our signature espresso, vanilla syrup, milk and caramel drizzle over ice.",
                            price: "₱160",
                            image: "/img/caramel2.png"
                        },
                        {
                            name: "Caramel Macchiato",
                            desc: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel drizzle.",
                            price: "₱145",
                            image: "/img/caramel1.png"
                        },
                        {
                            name: "Capuccino",
                            desc: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
                            price: "₱145",
                            image: "/img/capuccino1.png"
                        },
                        {
                            name: "Strawberries & Creme Frappuccino",
                            desc: "A short description of the product goes here. It gives customers an idea of what it is.",
                            price: "₱180",
                            image: "/img/caffe.webp"
                        },
                        {
                            name: "Toffee Nut Crunch Latte",
                            desc: "A short description of the product goes here. It gives customers an idea of what it is.",
                            price: "₱34.99",
                            image: "/img/Coffee3.png"
                        },
                        {
                            name: "Mocha Frappuccino",
                            desc: "Frappuccino® Roast coffee blended with Rich Mocha sauce, milk, and ice. Topped with whipped cream.",
                            price: "₱180",
                            image: "/img/mocha.webp"
                        },
                        {
                            name: "Iced Caffe American",
                            desc: "A short description of the product goes here. It gives customers an idea of what it is.",
                            price: "₱180",
                            image: "/img/caffe.png"
                        }
                    ].map((product, index) => (
                        <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col justify-between">
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={product.name === "Capuccino" ? 130 : 200}
                                    height={product.name === "Capuccino" ? 130 : 200}
                                    className="object-contain max-h-48"
                                />
                            </div>
                            <h3 className="text-left text-md font-bold text-black mb-2">{product.name}</h3>
                            <p className="text-left text-sm text-gray-500 mb-4">{product.desc}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-md font-semibold text-[#00704A]">{product.price}</span>
                                <div className="flex space-x-2">
                                    <Link
                                        href="/cart"
                                        className="bg-[#00704A] text-white px-3 sm:px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out text-sm"
                                    >
                                        Add to Cart
                                    </Link>
                                    <Link
                                        href="/viewproduct"
                                        className="border-[#00704A] border-2 text-[#00704A] px-3 sm:px-4 py-2 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out text-sm"
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
