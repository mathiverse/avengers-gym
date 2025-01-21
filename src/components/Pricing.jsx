import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import video3 from "../assets/vid-3.mp4";

const PackageSection = () => {
  const packages = [
    {
      name: "Contest Preparation",
      price: "6,000",
      duration: "per month",
      features: [
        "Professional Contest Guidance",
        "Customized Workout Plans",
        "Posing Practice Sessions",
        "Diet & Nutrition Planning",
        "Progress Tracking",
        "Supplement Guidance",
        "Competition Strategy"
      ],
      popular: true,
      color: "red"
    },
    {
      name: "Personal Training",
      price: "3,000",
      duration: "per month",
      features: [
        "One-on-One Training Sessions",
        "Customized Workout Plans",
        "Form Correction",
        "Diet Nutrition Guidance",
        "Weight Gain/Loss Programs",
        "Progress Monitoring",
        "Cardio Classes Access"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Online Coaching",
      price: "3,000",
      duration: "per month",
      features: [
        "Virtual Training Sessions",
        "Custom Workout Plans",
        "Diet & Nutrition Plans",
        "24/7 WhatsApp Support",
        "Weekly Progress Check",
        "Video Form Correction",
        "Online Consultation"
      ],
      popular: false,
      color: "gray"
    }
  ];

  const services = [
    {
      title: "Weight Gain",
      desc: "Specialized programs for muscle building and healthy weight gain"
    },
    {
      title: "Fat Loss",
      desc: "Effective programs for sustainable fat loss and toning"
    },
    {
      title: "Cardio Classes",
      desc: "Group and individual cardio sessions for improved fitness"
    },
    {
      title: "Diet Nutrition",
      desc: "Expert guidance on nutrition and meal planning"
    }
  ];

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
    <section className="relative py-20 bg-gradient-to-b from-black to-red-900">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
            Our Training Programs
          </h2>
          <p className="text-gray-300" data-aos="fade-up" data-aos-delay="100">
            Professional guidance for your fitness journey
          </p>
        </div>

        {/* Contact Info Banner */}
        <div className="max-w-4xl mx-auto mb-16 text-center bg-black bg-opacity-50 p-6 rounded-lg" data-aos="fade-up">
          <p className="text-white mb-2">Contact us on WhatsApp</p>
          <div className="flex justify-center space-x-4 text-xl font-bold text-red-500">
            <a 
              href="https://wa.me/919940711214" 
              className="hover:text-red-400 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6 mr-2" />
              +91 99407 11214
            </a>
            <a 
              href="https://wa.me/919442717478" 
              className="hover:text-red-400 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6 mr-2" />
              +91 94427 17478
            </a>
          </div>
          <p className="text-gray-300 mt-4">Time: 4:30 PM to 9:30 PM</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative rounded-2xl bg-black bg-opacity-50 p-8 shadow-xl backdrop-blur-sm transition-transform hover:scale-105
                ${pkg.popular ? 'border-2 border-red-500' : 'border border-gray-700'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 right-4 bg-red-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₹{pkg.price}</span>
                  <span className="text-gray-400">/{pkg.duration}</span>
                </div>

                <ul className="mb-8 space-y-4 text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full rounded-lg ${
                  pkg.popular 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                  } px-6 py-3 text-white transition-colors`}>
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-black bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-semibold text-red-500 mb-3">{service.title}</h4>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timing and Location */}
        <div className="mt-16 text-center bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Working Hours</h3>
          <p className="text-gray-300 text-lg">
            Open Daily: 4:30 PM to 9:30 PM
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4" data-aos="fade-up">
            Special Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Student Discount", desc: "15% off on all packages with valid ID" },
              { title: "Annual Membership", desc: "Get 2 months free on yearly subscription" },
              { title: "Couple Package", desc: "20% off when joining together" }
            ].map((offer, index) => (
              <div 
                key={offer.title}
                className="bg-black bg-opacity-50 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-semibold text-red-500 mb-2">{offer.title}</h4>
                <p className="text-gray-300">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center" data-aos="fade-up">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch between packages?",
                a: "Yes, you can upgrade or downgrade your package at the end of your billing cycle."
              },
              {
                q: "Is there a joining fee?",
                a: "No, we don't charge any additional joining fees. Just choose your package and start your fitness journey."
              },
              {
                q: "What's included in personal training sessions?",
                a: "Personal training includes one-on-one guidance, customized workout plans, and progress tracking with our certified trainers."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-black bg-opacity-50 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
