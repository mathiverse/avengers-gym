import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video3 from "../assets/vid-3.mp4";

const PricingSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-red-900 pb-16 text-white">
      <section className="relative mb-8 h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex h-full items-center justify-center bg-black/50">
          <div
            className="px-4 text-center text-white md:px-10"
            data-aos="fade-up"
          >
            <h1 className="mb-6 text-5xl font-bold">
              Affordable Pricing for Your Fitness Journey
            </h1>
            <p className="mb-8 text-lg">
              Choose a plan that works best for your fitness goals. Get started
              today!
            </p>
            <button
              onClick={scrollToPricing}
              className="inline-block rounded-full bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700"
            >
              See Pricing
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight" id="pricing">
            Gym Membership Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Choose the perfect plan for your fitness journey.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
          {/* Normal Gym Fees */}
          <div
            className="rounded-xl border border-red-600 bg-black/30 p-8 shadow-lg backdrop-blur-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="mb-4 text-2xl font-bold">Normal Gym Fees</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-bold">1 Month:</span> ₹700
              </li>
              <li>
                <span className="font-bold">3 Months Package:</span> ₹1900
              </li>
              <li>
                <span className="font-bold">6 Months Package:</span> ₹3600
              </li>
              <li>
                <span className="font-bold">Annual Package:</span> ₹7000
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 block rounded-lg bg-red-600 px-5 py-3 text-center font-medium text-white hover:bg-red-700"
            >
              Get Started
            </a>
          </div>

          {/* Normal Fees + Treadmill */}
          <div
            className="rounded-xl border border-red-600 bg-black/30 p-8 shadow-lg backdrop-blur-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="mb-4 text-2xl font-bold">Normal Fees + Treadmill</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-bold">1 Month:</span> ₹900
              </li>
              <li>
                <span className="font-bold">3 Months Package:</span> ₹2500
              </li>
              <li>
                <span className="font-bold">6 Months Package:</span> ₹4800
              </li>
              <li>
                <span className="font-bold">Annual Package:</span> ₹9400
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 block rounded-lg bg-red-600 px-5 py-3 text-center font-medium text-white hover:bg-red-700"
            >
              Get Started
            </a>
          </div>

          {/* Personal Training */}
          <div
            className="rounded-xl border border-red-600 bg-black/30 p-8 shadow-lg backdrop-blur-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="mb-4 text-2xl font-bold">Personal Training</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-bold">1 Month:</span> ₹3000
              </li>
              <li>
                <span className="font-bold">3 Months Package:</span> ₹8500
              </li>
              <li>
                <span className="font-bold">6 Months Package:</span> ₹16000
              </li>
              <li>
                <span className="font-bold">Annual Package:</span> ₹30000
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 block rounded-lg bg-red-600 px-5 py-3 text-center font-medium text-white hover:bg-red-700"
            >
              Get Started
            </a>
          </div>
        </div>

        <div
          className="mt-6 rounded-lg bg-black/40 p-4 text-gray-200"
          data-aos="fade-up"
        >
          <p className="font-bold text-red-400">Student Special Offer:</p>
          <p>₹2000 for personal training!</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
