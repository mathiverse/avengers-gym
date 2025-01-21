import React, { useState } from "react";

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Future backend integration here
      // await axios.post('/api/contact', formData);
      
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-red-900">
      <div className="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl" data-aos="fade-up" data-aos-duration="1200">
          We're here to help! Reach out to us with your inquiries or feedback.
        </p>
        
        {/* Status messages */}
        {status.message && (
          <div className={`p-4 mb-4 rounded ${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-blur-xl bg-darkRed dark:bg-opacity-80" data-aos="zoom-in" data-aos-duration="1200">
          <div>
            <label for="name" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
              placeholder="name@yourgym.com"
              required
            />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
              placeholder="Let us know how we can assist you"
              required
            />
          </div>
          <div>
            <label for="message" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-400">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Leave your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Find Us</h2>
          
          {/* Location Details */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg">
              <span className="font-semibold text-white">Avengers Fitness Center</span><br />
              KAP complex, Byepass,<br />
              Service Rd, Sattur,<br />
              Tamil Nadu 626203
            </p>
          </div>

          {/* Map Container */}
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115148.48834685048!2d77.83361118674736!3d9.359752791543954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b06cb88bc51477d%3A0xe65e038821af334c!2sKAP%20complex%2C%20Byepass%2C%20Service%20Rd%2C%20Sattur%2C%20Tamil%20Nadu%20626203!3m2!1d9.3597623!2d77.9160131!5e1!3m2!1sen!2sin!4v1737445986918!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-8 text-gray-300">
              <div>
                <p className="font-semibold text-white">Opening Hours</p>
                <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
                <p>Sunday: 6:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Contact</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@avengersgym.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
