import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../assets/logo_gym.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home"); // Track active link

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false); // Hide navbar on scroll down
      } else {
        setShow(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to handle the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      fluid
      rounded
      className={`sticky top-0 z-20 border-b border-transparent bg-transparent p-4 backdrop-blur-lg transition-transform duration-200 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link to="/">
        <Navbar.Brand>
          {" "}
          <img src={logo} className="mr-3 h-10 sm:h-9" alt="Avengers Gym" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">
          {" "}
          <Navbar.Link
            onClick={() => handleLinkClick("home")}
            className={`text-white transition duration-300 hover:text-red-500 focus:outline-none ${
              activeLink === "home" ? "text-red-500" : ""
            }`}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about">
          {" "}
          <Navbar.Link
            onClick={() => handleLinkClick("about")}
            className={`text-white transition duration-300 hover:text-red-500 focus:outline-none ${
              activeLink === "about" ? "text-red-500" : ""
            }`}
          >
            About
          </Navbar.Link>
        </Link>
        <Link to="/gallery">
          {" "}
          <Navbar.Link
            onClick={() => handleLinkClick("services")}
            className={`text-white transition duration-300 hover:text-red-500 focus:outline-none ${
              activeLink === "services" ? "text-red-500" : ""
            }`}
          >
            Gallery
          </Navbar.Link>
        </Link>
        <Link to="/pricing">
          {" "}
          <Navbar.Link
            onClick={() => handleLinkClick("pricing")}
            className={`text-white transition duration-300 hover:text-red-500 focus:outline-none ${
              activeLink === "pricing" ? "text-red-500" : ""
            }`}
          >
            Pricing
          </Navbar.Link>
        </Link>
        <Link to="/contact">
          {" "}
          <Navbar.Link
            onClick={() => handleLinkClick("contact")}
            className={`text-white transition duration-300 hover:text-red-500 focus:outline-none ${
              activeLink === "contact" ? "text-red-500" : ""
            }`}
          >
            Contact
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
