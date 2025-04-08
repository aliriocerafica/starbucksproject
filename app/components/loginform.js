"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


// LoginForm component
export default function LoginForm() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between forms

  const handleSignupClick = () => {
    setIsSignup(true); // Show signup form
  };

  const handleLoginClick = () => {
    setIsSignup(false); // Show login form
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, type: "login" }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/home");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/img/starbucks.png"  // Correct path
            alt="Starbucks Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h1 className="text-xl font-bold text-[#00704A]">{isSignup ? "Sign Up" : "Log In"}</h1>
          <p className="text-center text-black pb-2 pt-2 font-bold">{isSignup ? "Create an account" : "Welcome back"}</p>
          <p className="text-center text-black">{isSignup ? "Fill out the form to create your account." : "Please enter your credentials to enjoy your Starbucks rewards and personalized experience."}</p>
        </div>

        {/* Toggle between Login and Signup form */}
        <form className="space-y-4">
          {/* First Name and Last Name Inputs for Sign-Up */}
          {isSignup && (
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
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
            required
          />

          {/* Confirm Password (for Sign-Up) */}
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border-2 border-[#00704A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00704A]"
              required
            />
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
  <Link href="/home">
    <button
      type="submit"
      className="w-46 text-center p-3 bg-[#00704A] text-white rounded-full hover:bg-white border-2 border-[#00704A] hover:text-[#00704A] transition duration-300 ease-in-out"
    >
      {isSignup ? "Sign Up" : "Log In"}
    </button>
  </Link>
</div>

          {/* Forgot Password (Login Only) */}
          {!isSignup && (
            <Link href="/forgotpassword" className="text-black text-sm font-md hover:underline text-center block mt-4">
              Forgot Password?
            </Link>
          )}

          {/* Toggle between Sign-Up and Log-In */}
          <p className="text-center mt-4">
            {isSignup ? (
              <>
                <span className="text-gray-500">Already have an account? </span>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleLoginClick}
                >
                  Log In
                </span>
              </>
            ) : (
              <>
                <span className="text-gray-500">Don't have an account? </span>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleSignupClick}
                >
                  Sign Up
                </span>
              </>
            )}
          </p>

        </form>
      </div>
    </div>
  );
}
