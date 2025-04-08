"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login"); // Redirects to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-bold text-black leading-tight">
            Welcome to <span className="text-[#00704A]">Starbucks</span>
          </h1>
          <h2 className="text-xl text-gray-800 font-medium">
            Start your day with the perfect coffee experience.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you crave a bold espresso, a creamy latte, or a refreshing cold brew, Starbucks has the perfect drink to fuel your day. 
            Pair it with our delicious pastries or breakfast options for an experience that keeps you energized and ready to conquer anything.
          </p>
          
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Link href="/order">
              <button className="bg-[#00704A] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#00704A] border-2 border-[#00704A] transition duration-300">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
