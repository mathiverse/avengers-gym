import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import video3 from "../assets/vid-3.mp4";
import { Link } from "react-router-dom";

const PackageSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpansion = (cardName, e) => {
    e.preventDefault();
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const packages = [
    {
      name: "Normal Gym Fees",
      features: [
        { duration: "1 Month", price: "700", originalPrice: "800" },
        { duration: "3 Months", price: "1900", originalPrice: "2100" },
        { duration: "6 Months", price: "3600", originalPrice: "4200" },
        { duration: "Annual", price: "7000", originalPrice: "8400" }
      ],
      description: "Access to all gym equipment and facilities",
      color: "gray",
      icon: "🏋️‍♂️",
      highlights: [
        "Full Equipment Access",
        "Locker Facilities",
        "Shower Access",
        "Fitness Assessment"
      ]
    },
    {
      name: "Normal Fees + Treadmill",
      features: [
        { duration: "1 Month", price: "900", originalPrice: "1000" },
        { duration: "3 Months", price: "2500", originalPrice: "2700" },
        { duration: "6 Months", price: "4800", originalPrice: "5400" },
        { duration: "Annual", price: "9400", originalPrice: "10800" }
      ],
      description: "Full gym access with dedicated cardio equipment",
      color: "red",
      icon: "🏃‍♂️",
      popular: true,
      highlights: [
        "All Basic Features",
        "Cardio Equipment",
        "Treadmill Access",
        "Heart Rate Monitoring"
      ]
    },
    {
      name: "Personal Training",
      features: [
        { duration: "1 Month", price: "3000", originalPrice: "3500" },
        { duration: "3 Months", price: "8500", originalPrice: "9000" },
        { duration: "6 Months", price: "16000", originalPrice: "18000" },
        { duration: "Annual", price: "30000", originalPrice: "36000" }
      ],
      description: "One-on-one training with certified trainers",
      color: "gray",
      icon: "💪",
      studentOffer: true,
      studentPrice: "2000",
      highlights: [
        "One-on-One Training Sessions",
        "Customized Workout Plans",
        "Form Correction",
        "Diet Nutrition Guidance",
        "Weight Gain/Loss Programs",
        "Progress Monitoring",
        "Cardio Classes Access"
      ]
    },
    {
      name: "Online Coaching",
      features: [
        { duration: "1 Month", price: "3000", originalPrice: "3500" },
        { duration: "3 Months", price: "8500", originalPrice: "9000" },
        { duration: "6 Months", price: "16000", originalPrice: "18000" },
        { duration: "Annual", price: "30000", originalPrice: "36000" }
      ],
      description: "Remote coaching with personalized plans",
      color: "gray",
      icon: "💻",
      highlights: [
        "Virtual Training Sessions",
        "Custom Workout Plans",
        "Diet & Nutrition Plans",
        "24/7 WhatsApp Support",
        "Weekly Progress Check",
        "Video Form Correction",
        "Online Consultation"
      ]
    },
    {
      name: "Contest Preparation",
      features: [
        { duration: "1 Month", price: "6000", originalPrice: null },
        { duration: "3 Months", price: "17000", originalPrice: "18000" },
        { duration: "6 Months", price: "33000", originalPrice: "36000" },
        { duration: "12 Months", price: "66000", originalPrice: "72000" }
      ],
      description: "Professional contest guidance and preparation",
      color: "red",
      icon: "🏆",
      popular: true,
      highlights: [
        "Professional Contest Guidance",
        "Customized Workout Plans",
        "Posing Practice Sessions",
        "Diet & Nutrition Planning",
        "Progress Tracking",
        "Supplement Guidance",
        "Competition Strategy"
      ]
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
            Membership Plans
          </h2>
          <p className="text-gray-300" data-aos="fade-up" data-aos-delay="100">
            Choose the perfect plan for your fitness journey
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
          <p className="text-gray-300 mt-4">Time: Morning (5:30 AM - 9:30 AM), Evening (4:30 PM - 9:30 PM)</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative rounded-xl bg-black bg-opacity-80 p-6 shadow-xl backdrop-blur-sm transition-transform hover:scale-105 flex flex-col h-full
                ${pkg.name === "Normal Fees + Treadmill" || pkg.name === "Contest Preparation" ? 'border-2 border-red-500' : 'border border-gray-800'}`}
            >
              {(pkg.name === "Normal Fees + Treadmill" || pkg.name === "Contest Preparation") && (
                <div className="absolute -top-3 right-4 bg-red-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-4">
                <span className="text-3xl mb-4 block">{pkg.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{pkg.name}</h3>
                <p className="text-gray-400 text-sm h-12">{pkg.description}</p>
              </div>

              <div className="space-y-3 flex-grow mb-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-black bg-opacity-50 rounded-lg">
                    <span className="text-white text-sm">{feature.duration}</span>
                    <div className="text-right">
                      {feature.originalPrice && (
                        <span className="text-xs line-through text-gray-500 mr-2">₹{feature.originalPrice}</span>
                      )}
                      <span className="text-lg font-bold text-white">₹{feature.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {pkg.highlights && pkg.name !== "Personal Training" && (
                <>
                  <div className="mt-2 mb-2">
                    {!expandedCards[pkg.name] ? (
                      <>
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <div key={i} className="flex items-start text-gray-300 text-xs mb-1">
                            <svg className="w-3.5 h-3.5 mr-1.5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {highlight}
                          </div>
                        ))}
                        <button 
                          onClick={(e) => toggleCardExpansion(pkg.name, e)}
                          className="flex items-center justify-center w-full text-xs text-red-400 mt-2 hover:text-red-300"
                        >
                          View all features <FaChevronDown className="ml-1" />
                        </button>
                      </>
                    ) : (
                      <>
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start text-gray-300 text-xs mb-1">
                            <svg className="w-3.5 h-3.5 mr-1.5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {highlight}
                          </div>
                        ))}
                        <button 
                          onClick={(e) => toggleCardExpansion(pkg.name, e)}
                          className="flex items-center justify-center w-full text-xs text-red-400 mt-2 hover:text-red-300"
                        >
                          Show less <FaChevronUp className="ml-1" />
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}

              {pkg.studentOffer && (
                <div className="mt-auto mb-4 p-3 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg">
                  <p className="text-white text-center text-sm">
                    <span className="font-bold">Student Offer:</span><br />
                    ₹{pkg.studentPrice} per month
                  </p>
                </div>
              )}

              <Link
                to={`/contact?package=${pkg.name === "Normal Gym Fees" ? "normal" : 
                     pkg.name === "Normal Fees + Treadmill" ? "treadmill" : 
                     pkg.name === "Personal Training" ? "personal" :
                     pkg.name === "Online Coaching" ? "online" : "contest"}`}
                className={`inline-flex items-center justify-center w-full px-4 py-2 mt-auto text-sm font-medium text-white 
                  ${pkg.name === "Normal Fees + Treadmill" || pkg.name === "Contest Preparation" ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'} 
                  rounded-lg transition-all duration-300 hover:scale-105`}
              >
                Choose Plan
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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
            Morning: 5:30 AM - 9:30 AM<br />
            Evening: 4:30 PM - 9:30 PM
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
