import { Navbar } from "flowbite-react";
import logo from "../assets/logo_gym.png";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
        setIsOpen(false); // Close mobile menu on scroll
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/pricing", label: "Package" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <Navbar
      fluid
      rounded
      className={`fixed w-full top-0 z-50 border-b border-transparent bg-black/80 backdrop-blur-lg transition-all duration-300 h-20 
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${isOpen ? 'bg-black' : ''}`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            className="h-10 sm:h-12 transition-transform duration-300 hover:scale-105" 
            alt="Avengers Gym" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-red-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out 
                ${isOpen ? 'top-3 rotate-45' : 'top-1'}`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out 
                ${isOpen ? 'opacity-0' : 'top-3'}`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out 
                ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`}
            />
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`absolute top-20 left-0 w-full md:static md:w-auto md:flex md:items-center
          ${isOpen ? 'block' : 'hidden'} 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0'}`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 bg-black md:bg-transparent p-4 md:p-0">
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`block py-2 md:py-0 text-white transition duration-300 hover:text-red-500 text-base
                    ${location.pathname === link.path ? 'text-red-500' : ''}
                    hover:translate-x-2 md:hover:translate-x-0 transform`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Mobile Join Now Button */}
            <li className="md:hidden pt-2">
              <Link
                to="/contact"
                className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Join Now Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full 
              transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Join Now
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
