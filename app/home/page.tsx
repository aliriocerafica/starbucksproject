"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#FFF8F3] min-h-screen">
            <Navbar />

            {/* Jumbotron Section */}
            <div className="relative h-[640px] w-full flex justify-center items-center text-center">
                <div className="flex w-full h-full">
                    {/* Left Column - 30% */}
                    <div className="w-2/3 flex flex-col justify-center items-start text-black mx-auto">
                        <h1 className="text-6xl font-bold text-black text-left mt-24 md:mb-6 lg:mb-8 ml-8 lg:ml-32">
                            Start a day with the best  <span className="text-[#00704A]">Starbucks</span>
                        </h1>
                        <p className="text-xl mb-6 text-black text-left mb-4 md:mb-6 lg:mb-8 ml-8 lg:ml-32">
                            Start your morning with our expertly crafted beverages, made from the finest 
                            coffee beans. Whether you prefer a rich espresso, a creamy latte, or a refreshing 
                            cold brew, Starbucks offers the perfect cup to fuel your day. Pair it with our 
                            delicious pastries or breakfast options for a complete experience that keeps you 
                            energized and ready to conquer anything.
                        </p>
                        <Link
                            href="/menu"
                            className="bg-[#00704A] text-white text-left px-6 py-3 rounded-full text-lg hover:bg-[#004c2d] transition duration-300 ease-in-out ml-8 lg:ml-32"
                        >
                            Order Now
                        </Link>
                    </div>

                    {/* Right Column - 70% */}
                    <div className="w-2/3 flex items-center justify-center">
                        <Image
                            src="/img/product1.png"
                            alt="Starbucks Product"
                            layout="intrinsic"  // Using intrinsic for a more natural scale
                            width={800}  // Increased width
                            height={700} // Increased height
                            className="object-cover w-[70%] h-[70%] mt-32"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
