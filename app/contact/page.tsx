"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image"; // Import Image for handling images

export default function Contact() {
    return (
        <div>
            <Navbar />
            {/* Jumbotron Section with Background Image */}
            <div
                className="relative bg-cover bg-center h-[540px] w-full"
                style={{ backgroundImage: "url('/img/starbucks2.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <div className="absolute inset-0 flex justify-center items-center text-white z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                       
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen bg-[#FFF8F3] py-16 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Left Column: Contact Info */}
    <div>
      <h2 className="text-3xl font-bold text-[#00704A] mb-6">Get in Touch</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center space-x-3">
          <Image src="/img/phoneicon.svg" alt="Phone Icon" width={20} height={20} />
          <span><strong>Phone:</strong> +63 912 345 6789</span>
        </li>
        <li className="flex items-center space-x-3">
          <Image src="/img/emailicon.svg" alt="Email Icon" width={20} height={20} />
          <span><strong>Email:</strong> hello@yourcoffee.com</span>
        </li>
        <li className="flex items-center space-x-3">
          <Image src="/img/clockicon.svg" alt="Clock Icon" width={20} height={20} />
          <span><strong>Customer Service Hours:</strong> Mon - Sat, 9AM - 6PM</span>
        </li>
        <li className="flex items-center space-x-3">
          <Image src="/img/locationicon.svg" alt="Location Icon" width={20} height={20} />
          <span><strong>Find a Store:</strong> <a href="#" className="text-[#00704A] underline">store locator</a></span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-10 mb-3 text-[#00704A]">Connect with us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:opacity-80">
          <Image src="/img/fbicon.svg" alt="Facebook Icon" width={28} height={28} />
        </a>
        <a href="#" className="hover:opacity-80">
          <Image src="/img/twittericon.svg" alt="Twitter Icon" width={28} height={28} />
        </a>
        <a href="#" className="hover:opacity-80">
          <Image src="/img/instagramicon.svg" alt="Instagram Icon" width={28} height={28} />
        </a>
        {/* <a href="#" className="hover:opacity-80">
          <Image src="/img/linkedinicon.svg" alt="LinkedIn Icon" width={28} height={28} />
        </a> */}
      </div>
    </div>
    {/* Right Column: Contact Form */}
    <div>
      <h2 className="text-3xl font-bold text-[#00704A] mb-6">Send Us a Message</h2>
      <form className="space-y-4 bg-white p-6 shadow-sm rounded-md text-gray-500">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]">
            <option>Select a subject</option>
            <option>General Inquiry</option>
            <option>Feedback</option>
            <option>Order Issue</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#00704A] text-white px-6 py-2 rounded-full hover:bg-[#004c2d] transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

           


        </div>
    );
}
