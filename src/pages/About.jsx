import React from "react";
import Accord from "../components/Accord";
import video3 from "../assets/vid-2.mp4";
import trainer1 from "../assets/trainer1.jpeg";
const About = () => {
  return (
    <>
      <section className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
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
              Ignite Your Fitness Revolution at Avengers Gym
            </h1>
            <p className="mb-8 text-lg">
              Join our vibrant community at Avengers Gym, where expert trainers
              lead dynamic group workouts, and a supportive environment drives
              you to achieve your fitness goals. Together, we strive for
              greatness.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </section>

      <section class="column mx-auto flex max-w-screen-xl flex-col items-center bg-red-900 bg-opacity-40 px-4 py-5 backdrop-blur-md dark:bg-red-800 lg:px-5 lg:py-8">
        <div class="mx-auto mb-3 max-w-screen-sm text-center lg:mb-8">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Meet our Coach
          </h2>
          <p class="font-light text-gray-300 dark:text-gray-400 sm:text-xl lg:mb-5">
            Meet the dedicated and skilled members of our gym community who are
            always ready to help you reach your fitness goals.
          </p>
        </div>
        <div class="mb-2 flex w-6/12 items-center justify-center">
          <div class="items-center rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-700 shadow-lg dark:border-red-800 dark:bg-red-700 sm:flex">
            <a>
              <img
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={trainer1}
                alt="Jane Smith Avatar"
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-white">
                <a href="#">V K Mareeswaran</a>
              </h3>
              <span class="text-gray-300 dark:text-gray-400">
                Instructor & Wellness Coach
              </span>
              <p class="mb-4 mt-3 font-light text-gray-300 dark:text-gray-400">
                Mareeswaran specializes in yoga and mindfulness, helping you
                find balance and peace in both body and mind.
              </p>
              <ul class="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-gray-500 dark:hover:text-white"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-gray-500 dark:hover:text-white"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Accord />
    </>
  );
};

export default About;
