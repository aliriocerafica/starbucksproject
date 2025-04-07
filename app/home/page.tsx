"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#FFF8F3] min-h-screen">
            <Navbar />

            {/* Jumbotron Section */}
            <div className="relative w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-12 lg:px-32 py-12">
                
                {/* Right Column - Image (Moves on top for small screens) */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/img/product1.png"
                        alt="Starbucks Product"
                        width={500}
                        height={500}
                        className="object-contain w-[80%] md:w-[70%] lg:w-[60%] mb-6 md:mb-0"
                    />
                </div>

                {/* Left Column - Text (Moves below image on small screens) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        Start a day with the best <span className="text-[#00704A]">Starbucks</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black mt-4 md:mt-6 max-w-lg">
                        Start your morning with our expertly crafted beverages, made from the finest 
                        coffee beans. Whether you prefer a rich espresso, a creamy latte, or a refreshing 
                        cold brew, Starbucks offers the perfect cup to fuel your day. Pair it with our 
                        delicious pastries or breakfast options for a complete experience that keeps you 
                        energized and ready to conquer anything.
                    </p>
                    <Link
                        href="/menu"
                        className="mt-6 bg-[#00704A] text-white px-6 py-3 rounded-full text-lg hover:bg-[#004c2d] transition duration-300"
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
        
    );
}
