"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function SignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/img/starbucks.png" // Correct path
            alt=""
            width={100}
            height={100}
            className="mb-4"
          />
          <h1 className="text-xl font-bold text-[#00704A]">Sign Up</h1>
          <p className='text-center text-black pb-2 pt-2 font-bold'>Create an account</p>
          <p className='text-center text-black'>Fill out the form below to create your account and enjoy personalized experiences.</p>
        </div>
        <form className="space-y-4">

          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
                required
              />
            </div>
          </div>

          {/* Email address */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
            required
          />

          <div className='flex justify-center'>
            <button
              type="submit"
              className="w-46 text-center p-3 bg-[#00704A] text-white rounded-full hover:bg-white border-2 border-[#00704A] hover:text-[#00704A] transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center mt-4">
            <span className="text-[#00704A]">Already have an account? </span>
            <span className="text-blue-500 cursor-pointer">
              <Link href="/login">Log In</Link>
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}
