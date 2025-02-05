import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get package type from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const packageFromUrl = params.get('package');
    if (packageFromUrl) {
      setFormData(prev => ({
        ...prev,
        packageType: packageFromUrl
      }));
    }
  }, [location]);

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: '', // This will now be pre-filled if coming from pricing page
    preferredTime: '',
    trainingType: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    // Only navigate to home if it was a successful submission
    if (status.type === 'success') {
      navigate('/');
    }
  };

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

    console.log('Submitting form with data:', formData);
    console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your inquiry! Our team will contact you shortly to discuss your training preferences.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          packageType: '',
          preferredTime: '',
          trainingType: '',
          message: ''
        });
        
        if (data.previewUrls) {
          console.log('Email Preview URLs:', data.previewUrls);
          window.open(data.previewUrls.userEmail, '_blank');
        }
        
        // Show modal instead of status message
        setShowModal(true);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-red-900">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full transform transition-all">
            <div className={`text-center ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              <div className="mb-4">
                {status.type === 'success' ? (
                  <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <svg className="mx-auto h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-medium mb-4">
                {status.type === 'success' ? 'Booking Successful!' : 'Error'}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{status.message}</p>
              <button
                onClick={handleCloseModal}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              >
                {status.type === 'success' ? 'OK' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Book Your Session
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl" data-aos="fade-up" data-aos-duration="1200">
          Ready to start your fitness journey? Fill out the form below and we'll help you get started!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8 bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-blur-xl bg-darkRed dark:bg-opacity-80" data-aos="zoom-in" data-aos-duration="1200">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="Your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="packageType" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Package Type</label>
            <select
              id="packageType"
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              required
            >
              <option value="">Select a package</option>
              <option value="contest">Contest Preparation (₹6,000/month)</option>
              <option value="personal">Personal Training (₹3,000/month)</option>
              <option value="online">Online Coaching (₹3,000/month)</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredTime" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Preferred Training Time</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              required
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (5:30 AM - 9:30 AM)</option>
              <option value="evening">Evening (4:30 PM - 9:30 PM)</option>
            </select>
          </div>
          <div>
            <label htmlFor="trainingType" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Training Focus</label>
            <select
              id="trainingType"
              name="trainingType"
              value={formData.trainingType}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              required
            >
              <option value="">Select training focus</option>
              <option value="weight-gain">Weight Gain</option>
              <option value="fat-loss">Fat Loss</option>
              <option value="cardio">Cardio Classes</option>
              <option value="diet">Diet & Nutrition</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-400">Additional Information</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500"
              placeholder="Any specific goals, health conditions, or questions..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Sending...' : 'Book Session'}
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
                <p>Morning: 5:30 AM - 9:30 AM</p>
                <p>Evening: 4:30 PM - 9:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Contact</p>
                <p>Phone: +91 99407 11214</p>
                <p>WhatsApp: +91 94427 17478</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
