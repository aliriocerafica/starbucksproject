"use client";
import Navbar from "../components/navbar"; // Ensure this is correct relative to the file location
import { useRouter } from "next/navigation"; // For navigating back
import Image from "next/image"; // Import Image for handling images
import { useState } from "react"; // For state management (quantity, selected size)
import  { ChevronLeftIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons

export default function ProductView() {
    const router = useRouter(); // Router to handle navigation
    const [quantity, setQuantity] = useState(1); // Track the quantity
    const [selectedSize, setSelectedSize] = useState("Tall"); // Track the selected size

    const handleQuantityChange = (type: string) => {
        if (type === "increase") {
            setQuantity(prev => prev + 1);
        } else if (type === "decrease" && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="bg-[#FFF8F3] min-h-screen">
            <Navbar />

            {/* Back Button */}
            <div className="flex items-center p-4 pt-16">
      <button 
        onClick={() => router.back()} 
        className="text-[#00704A] hover:text-[#004c2d] transition duration-300 ease-in-out text-3xl"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <h2 className="text-xl font-bold text-[#00704A] ml-4">Caramel Macchiato</h2>
     
    </div>




            {/* Product Details */}
            <div className="flex flex-col items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/img/green1.png" // Change the image based on the product
                            alt="Product Image"
                            width={350}
                            height={350}
                            className="object-cover"
                        />
                    </div>

                    {/* Product Description */}
                    <h3 className="text-2xl font-bold text-black mb-4">Green Tea Latte</h3>
                    <p className="text-md text-gray-500 mb-6">
                    Smooth and creamy matcha sweetened just right and served with steamed milk.
                    </p>

                    {/* Quantity Adjust */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-lg text-gray-500">Quantity</span>
                        <button 
                            onClick={() => handleQuantityChange("decrease")} 
                            className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
                        >
                            -
                        </button>
                        <span className="text-xl text-gray-500">{quantity}</span>
                        <button 
                            onClick={() => handleQuantityChange("increase")} 
                            className="bg-[#00704A] text-white px-4 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
                        >
                            +
                        </button>
                        <span className="text-lg text-gray-600 ml-4">Total Price: ₱{(110 * quantity).toFixed(2)}</span>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <span className="text-lg text-gray-600">Size</span>
                        <div className="flex space-x-4 mt-2">
                            <button 
                                onClick={() => setSelectedSize("Tall")} 
                                className={`px-6 py-2 rounded-full border-2 ${selectedSize === "Tall" ? "bg-[#00704A] text-white" : "text-[#00704A] border-[#00704A]"}`}
                            >
                                Tall
                            </button>
                            <button 
                                onClick={() => setSelectedSize("Venti")} 
                                className={`px-6 py-2 rounded-full border-2 ${selectedSize === "Venti" ? "bg-[#00704A] text-white" : "text-[#00704A] border-[#00704A]"}`}
                            >
                                Venti
                            </button>
                            <button 
                                onClick={() => setSelectedSize("Grande")} 
                                className={`px-6 py-2 rounded-full border-2 ${selectedSize === "Grande" ? "bg-[#00704A] text-white" : "text-[#00704A] border-[#00704A]"}`}
                            >
                                Grande
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart and Order Now Buttons */}
                    <div className="flex justify-between space-x-4">
                        <button
                            className="bg-white text-[#00704A] border-2 border-[#00704A] px-10 py-3 rounded-full hover:bg-[#00704A] hover:text-white transition duration-300 ease-in-out w-full"
                        >
                            Add to Cart
                        </button>
                        <button
                            className="bg-[#00704A] text-white px-10 py-3 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out w-full"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
