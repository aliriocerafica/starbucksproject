"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-black mb-4">
            Start the day with the best <span className="text-[#00704A]">Starbucks</span>
          </h1>
          <p className="text-gray-700 mb-6">
            Start your morning with our expertly crafted beverages, made from the finest coffee beans. Whether you prefer a rich espresso, a creamy latte, or a refreshing cold brew, Starbucks offers the perfect cup to fuel your day. Pair it with our delicious pastries or breakfast options for a complete experience that keeps you energized and ready to conquer anything.
          </p>
          <Link href="/order">
            <button className="bg-[#00704A] text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#00704A] border-2 border-[#00704A] transition duration-300">
              Order Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="/img/starbucks-drink.png" 
            alt="Starbucks Drink"
            width={500}
            height={500}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
