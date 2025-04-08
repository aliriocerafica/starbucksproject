"use client";

import { useState } from "react";
import Image from "next/image"; // For rendering images
import Link from "next/link"; // For navigation between pages
import Navbar from "../components/navbar"; // Import your Navbar component

export default function Cart() {
  // Example cart data (you would likely use a global state here, e.g., Context API or Redux)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Tea Latte",
      price: 110,
      image: "/img/green1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Green Tea Latte",
      price: 110,
      image: "/img/green1.png",
      quantity: 1,
    },
  ]);

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle removing an item from the cart
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Handle updating the quantity
  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    ));
  };

  return (
    <div className="bg-[#FFF8F3] min-h-screen">
        <Navbar />
    
        {/* Main Section */}
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl text-left font-bold text-[#00704A] pt-14 text-center">Cart</h1>

        {/* Cart items list */}
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg mb-6">
                  <div className="flex items-center space-x-4">
                    <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                    <div>
                      <h3 className="text-md font-bold text-black">{item.name}</h3>
                      <p className="text-sm text-gray-500">₱{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Quantity */}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 text-center text-gray-500 p-2 border rounded"
                    />

                    {/* Remove item */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart summary */}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#00704A]">Total</h2>
              <p className="text-lg text-gray-600">₱{totalPrice.toFixed(2)}</p>
            </div>
            <div className="space-x-4">
              <Link href="/menu">
                <button className="bg-[#00704A] text-white px-6 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/checkout">
                <button className="bg-[#00704A] text-white px-6 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
