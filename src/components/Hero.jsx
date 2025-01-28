import React from "react";
import vid2 from "../assets/vid-1.mp4";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src={vid2} // Replace with your video path
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Red Overlay */}
      <div className="bg-darkRed/30 absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-extrabold sm:text-7xl" data-aos="fade-down">
          Empower Your Fitness Journey
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl" data-aos="fade-up">
          Join the ultimate gym experience. Build strength, endurance and
          confidence with our state-of-the-art equipment and expert trainers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link 
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
          >
            Start Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            to="/pricing"
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
