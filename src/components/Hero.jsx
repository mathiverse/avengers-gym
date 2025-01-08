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
        <h1 className="mb-6 text-5xl font-extrabold sm:text-7xl">
          Empower Your Fitness Journey
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl">
          Join the ultimate gym experience. Build strength, endurance, and
          confidence with our state-of-the-art equipment and expert trainers.
        </p>
        <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <Link to="/contact">
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Get started
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
