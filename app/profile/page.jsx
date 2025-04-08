"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Mary Joy Ramos",
    email: "joymaryramos@gmail.com",
    phone: "09638298913",
    birthday: "January 1, 2004",
    address: "Bansud, Oriental Mindoro",
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Gcash", lastDigits: "0003", balance: 203.5 },
    { id: 2, type: "Paymaya", lastDigits: "0003", balance: 203.5 },
  ]);

  const [orders, setOrders] = useState([
    { id: 123456, date: "March 1, 2024", items: 2 },
    { id: 23456, date: "March 1, 2024", items: 2 },
    { id: 323456, date: "March 1, 2024", items: 2 },
  ]);

  return (
    <div className="bg-[#FFF8F3] min-h-screen text-black mt-6">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mt-6">
          <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">MJ</span>
          </div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
        
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p><strong>Full Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Birthday:</strong> {user.birthday}</p>
          </div>
          <button className="text-green-600 mt-2">Edit Information</button>
        </div>
        
        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Payment Methods</h2>
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex justify-between border-b py-2">
              <p><strong>{method.type}</strong> **** {method.lastDigits}</p>
              <p className="text-green-600 font-bold">₱{method.balance.toFixed(2)}</p>
            </div>
          ))}
          <button className="text-green-600 mt-2">Add Payment Method</button>
        </div>
        
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          {orders.map((order) => (
            <div key={order.id} className="flex justify-between border-b py-2">
              <p>Order #{order.id} - {order.items} items • {order.date}</p>
              <Link href="#" className="text-green-600">View Details</Link>
            </div>
          ))}
        </div>
        
        {/* Saved Addresses */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Saved Addresses</h2>
          <p><strong>Home:</strong> {user.address}</p>
          <button className="text-green-600 mt-2">Add New Address</button>
        </div>
      </div>
    </div>
  );
}
