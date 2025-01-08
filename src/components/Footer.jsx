import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export function FooterGym() {
  return (
    <footer className="bg-darkRed px-4 py-8 text-white sm:px-6">
      <div className="mx-auto grid max-w-screen-xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Contact Info */}
        <div className="space-y-4" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Phone: +91 99407 11214</p>
          <p>Email: vkmarees16@gmail.com</p>
          <p>
            Address: KAP Complex, Byepass, Service Rd, Sattur, Tamil Nadu 626203
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul>
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-red-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/vk_the_coach/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <BsInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4">
        <p className="text-center text-sm">
          © 2025 Avengers Gym, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
