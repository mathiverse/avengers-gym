import React from "react";
import { Carousel } from "flowbite-react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      review:
        "This gym transformed my life! Amazing trainers and great atmosphere.",
    },
    {
      name: "Jane Smith",
      review: "I love the energy here! Highly recommend to everyone.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-screen-xl py-12 " data-aos="fade-up">
      <h2 className="mb-8 text-center text-3xl font-bold text-red-800">
        What Our Members Say
      </h2>
      <Carousel className="relative h-[450px]">
        {/* Testimonial 1 */}
        <div className="mx-auto flex w-auto flex-col justify-between rounded-lg border border-red-500 bg-gray-800 bg-opacity-60 p-6 shadow-lg backdrop-blur-xl">
          <p className="text-lg font-medium text-gray-300">
            "Joining Avengers Gym transformed my fitness journey! The trainers
            are amazing, and the community is so motivating."
          </p>
          <div className="mt-6 flex items-center">
            <img
              src={avatar1}
              alt="John Doe"
              className="h-12 w-12 rounded-full border-2 border-red-600"
            />
            <div className="ml-4">
              <p className="font-bold text-red-400">Vignesh</p>
              <p className="text-sm text-gray-500">Member for 2 years</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="mx-auto flex w-auto flex-col justify-between rounded-lg border border-red-500 bg-gray-800 bg-opacity-60 p-6 shadow-lg backdrop-blur-xl">
          <p className="text-lg font-medium text-gray-300">
            "State-of-the-art equipment and the best group classes! Highly
            recommend Avengers Gym."
          </p>
          <div className="mt-6 flex items-center">
            <img
              src={avatar2}
              alt="Jane Smith"
              className="h-12 w-12 rounded-full border-2 border-red-600"
            />
            <div className="ml-4">
              <p className="font-bold text-red-400">Ram saran</p>
              <p className="text-sm text-gray-500">Member for 1 year</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="mx-auto flex w-auto flex-col justify-between rounded-lg border border-red-500 bg-gray-800 bg-opacity-60 p-6 shadow-lg backdrop-blur-xl">
          <p className="text-lg font-medium text-gray-300">
            "The personal training sessions are top-notch. I've achieved goals I
            never thought possible."
          </p>
          <div className="mt-6 flex items-center">
            <img
              src={avatar3}
              alt="Mark Taylor"
              className="h-12 w-12 rounded-full border-2 border-red-600"
            />
            <div className="ml-4">
              <p className="font-bold text-red-400">Kumaran</p>
              <p className="text-sm text-gray-500">Member for 3 years</p>
            </div>
          </div>
        </div>
      </Carousel>
      {/* Navigation Arrows */}
      <style>{`
      .carousel-control-prev,
      .carousel-control-next {
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default TestimonialSection;
