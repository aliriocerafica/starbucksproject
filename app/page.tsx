"use client";
import { useState } from "react";
import Image from "next/image";
import Loginform from "./components/loginform";
import Signupform from "./components/signupform"; // Assuming you have this component

export default function Home() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup forms

  const handleSignupClick = () => {
    setIsSignup(true); // Show signup form
  };

  const handleLoginClick = () => {
    setIsSignup(false); // Show login form
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: "url('/img/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     <Loginform />
    </div>
  );
}
