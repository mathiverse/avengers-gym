import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Hero";
import DetailsSection from "../components/Details";
import TestimonialSection from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DetailsSection />
      
      {/* New Featured Classes Section */}
      <section className="py-16 bg-gradient-to-b from-black to-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">
            Featured Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Class Cards */}
            {['Strength Training', 'Cardio Blast', 'Yoga Flow'].map((className) => (
              <div 
                key={className}
                className="bg-black bg-opacity-50 rounded-lg p-6 text-white transform hover:scale-105 transition-all"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-bold mb-4">{className}</h3>
                <p className="text-gray-300 mb-4">Experience our signature {className.toLowerCase()} class.</p>
                <Link to="/pricing" className="inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all duration-300">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center" data-aos="fade-up">
            {[
              { number: '1000+', label: 'Members' },
              { number: '50+', label: 'Classes Weekly' },
              { number: '5', label: 'Years Experience' }
            ].map((stat) => (
              <div key={stat.label} className="text-white flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8" data-aos="fade-up">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our community and transform your life
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
