import React from "react";
import {
  FaDumbbell,
  FaUsers,
  FaAppleAlt,
  FaChartLine,
  FaBed,
  FaVideo,
} from "react-icons/fa";

const DetailsSection = () => {
  return (
    <section className="bg-dark-red text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            Optimized for Fitness Enthusiasts
          </h2>
          <p className="text-gray-300 sm:text-xl">
            Experience tailored fitness services designed to help you achieve
            your goals, with cutting-edge tools and expert coaching to guide
            your progress.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {/* Personal Training */}
          <div data-aos="zoom-in-up">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaDumbbell className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Personal Training</h3>
            <p>
              Transform your fitness journey with one-on-one sessions tailored
              to your unique needs and goals.
            </p>
          </div>

          {/* Group Classes */}
          <div data-aos="zoom-in-up" data-aos-delay="200">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaUsers className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Group Classes</h3>
            <p>
              Join a community of fitness enthusiasts in dynamic group classes
              that keep you motivated and energized.
            </p>
          </div>

          {/* Nutrition Guidance */}
          <div data-aos="zoom-in-up" data-aos-delay="400">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaAppleAlt className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Nutrition Guidance</h3>
            <p>
              Optimize your workouts with personalized nutrition plans that
              complement your fitness goals.
            </p>
          </div>

          {/* Performance Tracking */}
          <div data-aos="zoom-in-up" data-aos-delay="600">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaChartLine className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Performance Tracking</h3>
            <p>
              Stay on track with advanced fitness tracking to monitor your
              progress and make data-driven decisions.
            </p>
          </div>

          {/* Recovery Support */}
          <div data-aos="zoom-in-up" data-aos-delay="800">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaBed className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Recovery Support</h3>
            <p>
              Enhance your recovery with proven techniques and expert advice to
              prevent injuries and maintain peak performance.
            </p>
          </div>

          {/* Virtual Coaching */}
          <div data-aos="zoom-in-up" data-aos-delay="1000">
            <div className="bg-dark-red-light mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
              <FaVideo className="text-dark-red-dark text-3xl" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Virtual Coaching</h3>
            <p>
              Train from anywhere with virtual coaching sessions that bring
              expert guidance straight to your screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
