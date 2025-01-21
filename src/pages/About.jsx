import React, { useState } from "react";
import Accord from "../components/Accord";
import video3 from "../assets/vid-2.mp4";
import trainer1 from "../assets/trainer1.jpeg";
import trainer2 from "../assets/trainer2.jpeg";
import trainer3 from "../assets/trainer3.jpeg";
import trainer4 from "../assets/trainer4.jpeg";
import trainer5 from "../assets/trainer5.jpeg";
import { Link } from "react-router-dom";

const trainerImages = [
  {
    url: trainer1,
    id: crypto.randomUUID(),
    alt: "V K Mareeswaran - Main Profile",
    title: "Lead Fitness Instructor"
  },
  {
    url: trainer2,
    id: crypto.randomUUID(),
    alt: "Training Session",
    title: "Group Training"
  },
  {
    url: trainer3,
    id: crypto.randomUUID(),
    alt: "Personal Training",
    title: "One-on-One Session"
  },
  {
    url: trainer4,
    id: crypto.randomUUID(),
    alt: "Strength Training",
    title: "Strength Training Session"
  },
  {
    url: trainer5,
    id: crypto.randomUUID(),
    alt: "Contest Preparation",
    title: "Contest Prep Training"
  }
];

const About = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openPreview = (imageSrc, index) => {
    setPreviewImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setCurrentImageIndex(null);
  };

  const navigateImage = (direction) => {
    const newIndex = (currentImageIndex + direction + trainerImages.length) % trainerImages.length;
    setPreviewImage(trainerImages[newIndex].url);
    setCurrentImageIndex(newIndex);
  };

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
            <Link
              to="/contact"
              className="inline-block rounded-full bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700 transition-all duration-300 hover:scale-105"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </section>

      <section className="column mx-auto flex max-w-screen-xl flex-col items-center bg-red-900 bg-opacity-40 px-4 py-5 backdrop-blur-md dark:bg-red-800 lg:px-5 lg:py-8">
        <div className="mx-auto mb-3 max-w-screen-sm text-center lg:mb-8">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Meet our Coach
          </h2>
          <p className="font-light text-gray-300 dark:text-gray-400 sm:text-xl lg:mb-5">
            Meet the dedicated and skilled members of our gym community who are always ready to help you reach your fitness goals.
          </p>
        </div>
        <div className="mb-2 flex w-6/12 items-center justify-center">
          <div className="items-center rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-700 shadow-lg dark:border-red-800 dark:bg-red-700 sm:flex">
            <div className="relative group cursor-pointer" onClick={() => openPreview(trainer1, 0)}>
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg transition-transform duration-300 group-hover:scale-105"
                src={trainer1}
                alt="Mareeswaran"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 hidden sm:flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    Click to view gallery
                  </p>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 sm:hidden">
                <div className="bg-black bg-opacity-60 px-3 py-1 rounded-full flex items-center animate-pulse">
                  <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white text-xs">Tap to view more</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">V K Mareeswaran</a>
              </h3>
              <span className="text-gray-300 dark:text-gray-400">
                Instructor & Wellness Coach
              </span>
              <p className="mb-4 mt-3 font-light text-gray-300 dark:text-gray-400">
                Mareeswaran specializes in yoga and mindfulness, helping you
                find balance and peace in both body and mind.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="text-gray-300 hover:text-gray-500 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-gray-500 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div className="relative h-[80vh] w-[90vw] max-w-5xl overflow-hidden rounded-lg bg-black bg-opacity-90 shadow-2xl">
            <div className="relative h-full flex items-center justify-center p-4">
              <img
                src={previewImage}
                alt={trainerImages[currentImageIndex].alt}
                className="max-h-full max-w-full rounded-lg object-contain"
              />

              <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>

              <button
                className="absolute right-4 top-4 rounded-full bg-red-600 p-2 text-xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                onClick={closePreview}
                aria-label="Close preview"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold">{trainerImages[currentImageIndex].title}</h3>
                <p className="text-sm text-gray-300">{trainerImages[currentImageIndex].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-gradient-to-b from-red-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              { year: '2019', title: 'Foundation', description: 'Avengers Gym was established' },
              { year: '2020', title: 'Growth', description: 'Expanded facilities and services' },
              { year: '2021', title: 'Community', description: 'Built strong fitness community' },
              { year: '2023', title: 'Innovation', description: 'Introduced new training programs' },
              { year: '2025', title: 'Future Vision', description: 'Expanding to multiple locations and introducing advanced training facilities' }
            ].map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex items-center gap-8 mb-8"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="w-24 text-2xl font-bold text-red-600">{milestone.year}</div>
                <div className="flex-1 bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Accord />
    </>
  );
};

export default About;
