import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css"; // Import our custom styles
import { FaCreditCard, FaUniversity, FaQrcode, FaMoneyBillWave } from 'react-icons/fa';

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
    packageType: '',
    trainingType: '',
    message: '',
    bookingDate: null,
    paymentMethod: '',
    paymentType: '' // 'direct' or 'online'
  });
  const [currentStep, setCurrentStep] = useState(1); // Track form steps
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  // Get package details based on type
  const getPackageDetails = (type) => {
    switch(type) {
      case 'contest':
        return {
          name: 'Contest Preparation',
          price: 6000,
          duration: 'month'
        };
      case 'personal':
        return {
          name: 'Personal Training',
          price: 3000,
          duration: 'month'
        };
      case 'online':
        return {
          name: 'Online Coaching',
          price: 3000,
          duration: 'month'
        };
      default:
        return null;
    }
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  // Handle payment type selection
  const handlePaymentTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      paymentType: type
    }));
  };

  // Function to proceed to next step
  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
      // Scroll to top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Function to go back to previous step
  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
    // Also scroll to top when going back
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Validate current step
  const validateCurrentStep = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone && 
             formData.packageType && formData.trainingType && formData.bookingDate && formData.paymentType;
    }
    return true;
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      bookingDate: date
    }));
  };

  // Filter available time slots based on selected date
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    // If it's the same day, only show future times
    if (currentDate.toDateString() === selectedDate.toDateString()) {
      return currentDate.getTime() < selectedDate.getTime();
    }

    // Get hours for morning and evening slots
    const hours = selectedDate.getHours();
    const minutes = selectedDate.getMinutes();
    const timeInMinutes = hours * 60 + minutes;

    // Morning slot: 5:30 AM - 9:30 AM (330 - 570 minutes)
    // Evening slot: 4:30 PM - 9:30 PM (990 - 1290 minutes)
    return (timeInMinutes >= 330 && timeInMinutes <= 570) || 
           (timeInMinutes >= 990 && timeInMinutes <= 1290);
  };

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
          trainingType: '',
          message: '',
          bookingDate: null,
          paymentMethod: '',
          paymentType: ''
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

  // Calculate minimum date (today)
  const minDate = new Date();
  
  // Calculate maximum date (2 weeks from today)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);

  // Render payment section
  const renderPaymentSection = () => {
    const packageDetails = getPackageDetails(formData.packageType);
    
    return (
      <div className="space-y-8">
        <div className="bg-black bg-opacity-40 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Booking Summary</h3>
          <div className="space-y-2 text-gray-300">
            <p><span className="font-medium">Package:</span> {packageDetails?.name}</p>
            <p><span className="font-medium">Amount:</span> ₹{packageDetails?.price}/{packageDetails?.duration}</p>
            <p><span className="font-medium">Training Focus:</span> {formData.trainingType.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
            <p><span className="font-medium">Session Date:</span> {formData.bookingDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><span className="font-medium">Session Time:</span> {formData.bookingDate?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select Payment Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => handlePaymentMethodSelect('card')}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.paymentMethod === 'card'
                  ? 'border-red-500 bg-red-500 bg-opacity-20'
                  : 'border-gray-600 hover:border-red-500'
              }`}
            >
              <div className="flex flex-col items-center text-white space-y-2">
                <FaCreditCard className="text-2xl" />
                <span>Card Payment</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handlePaymentMethodSelect('netbanking')}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.paymentMethod === 'netbanking'
                  ? 'border-red-500 bg-red-500 bg-opacity-20'
                  : 'border-gray-600 hover:border-red-500'
              }`}
            >
              <div className="flex flex-col items-center text-white space-y-2">
                <FaUniversity className="text-2xl" />
                <span>Net Banking</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handlePaymentMethodSelect('upi')}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.paymentMethod === 'upi'
                  ? 'border-red-500 bg-red-500 bg-opacity-20'
                  : 'border-gray-600 hover:border-red-500'
              }`}
            >
              <div className="flex flex-col items-center text-white space-y-2">
                <FaQrcode className="text-2xl" />
                <span>UPI</span>
              </div>
            </button>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-400 mb-4">
            By proceeding with the payment, you agree to our terms and conditions.
            Your booking will be confirmed after successful payment.
          </p>
        </div>
      </div>
    );
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
          {currentStep === 1 ? "Book Your Session" : "Complete Payment"}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl" data-aos="fade-up" data-aos-duration="1200">
          {currentStep === 1 ? "Ready to start your fitness journey? Fill out the form below and we'll help you get started!" : "Please review your booking details and complete the payment"}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8 bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-blur-xl bg-darkRed dark:bg-opacity-80" data-aos="zoom-in" data-aos-duration="1200">
          {currentStep === 1 ? (
            <div className="space-y-8">
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
                <label htmlFor="bookingDate" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">
                  Preferred Date and Time
                </label>
                <div className="date-picker-wrapper">
                  <DatePicker
                    selected={formData.bookingDate}
                    onChange={handleDateChange}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Select date and time"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                    required
                    timeIntervals={30}
                    timeCaption="Select Time"
                    showTimeSelectOnly={false}
                    timeFormat="h:mm aa"
                    popperClassName="date-picker-popper"
                    calendarClassName="date-picker-calendar"
                    timeClassName={time => {
                      const hours = time.getHours();
                      const minutes = time.getMinutes();
                      const timeInMinutes = hours * 60 + minutes;
                      
                      // Morning slot: 5:30 AM - 9:30 AM (330 - 570 minutes)
                      // Evening slot: 4:30 PM - 9:30 PM (990 - 1290 minutes)
                      const isAvailable = 
                        (timeInMinutes >= 330 && timeInMinutes <= 570) || 
                        (timeInMinutes >= 990 && timeInMinutes <= 1290);
                      
                      return isAvailable ? 'available-time-slot' : 'unavailable-time-slot';
                    }}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-300">
                  Note: You can book sessions up to 2 weeks in advance. Available time slots:
                  <br />Morning: 5:30 AM - 9:30 AM
                  <br />Evening: 4:30 PM - 9:30 PM
                </p>
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
                <label className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Payment Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handlePaymentTypeSelect('direct')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.paymentType === 'direct'
                        ? 'border-red-500 bg-red-500 bg-opacity-20'
                        : 'border-gray-600 hover:border-red-500'
                    }`}
                  >
                    <div className="flex flex-col items-center text-white space-y-2">
                      <FaMoneyBillWave className="text-2xl" />
                      <span>Direct Payment at Gym</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePaymentTypeSelect('online')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.paymentType === 'online'
                        ? 'border-red-500 bg-red-500 bg-opacity-20'
                        : 'border-gray-600 hover:border-red-500'
                    }`}
                  >
                    <div className="flex flex-col items-center text-white space-y-2">
                      <FaCreditCard className="text-2xl" />
                      <span>Online Payment</span>
                    </div>
                  </button>
                </div>
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
            </div>
          ) : (
            <div>
              {renderPaymentSection()}
            </div>
          )}

          <div className="flex justify-between space-x-4">
            {currentStep === 1 && (
              <button
                type="button"
                onClick={formData.paymentType === 'direct' ? handleSubmit : handleNextStep}
                disabled={!validateCurrentStep()}
                className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 w-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ${
                  !validateCurrentStep() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {formData.paymentType === 'direct' ? 'Book Session' : 'Proceed to Payment'}
              </button>
            )}
            
            {currentStep === 2 && (
              <>
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 w-1/2"
                >
                  Back
                </button>
                
                <button
                  type="submit"
                  disabled={isLoading || !formData.paymentMethod}
                  className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 w-1/2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ${
                    (isLoading || !formData.paymentMethod) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Pay Now'}
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Find Us Section - Moved outside the form */}
      <div className="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <section>
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
