import React from "react";

const Contact = () => {
  return (
    <section class="relative bg-black">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="your-video-url.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <div class="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white" data-aos="fade-up" data-aos-duration="1000">
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl" data-aos="fade-up" data-aos-duration="1200">
        We’re here to help! Reach out to us with your inquiries or feedback.
      </p>
      <form action="#" class="space-y-8 bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-blur-xl bg-dark-red-700 dark:bg-opacity-80" data-aos="zoom-in" data-aos-duration="1200">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Name</label>
          <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="Your Full Name" required />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Your Email</label>
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="name@yourgym.com" required />
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-white-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light" placeholder="Let us know how we can assist you" required />
        </div>
        <div>
          <label for="message" class="block mb-2 text-sm font-medium text-white-900 dark:text-gray-400">Your Message</label>
          <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Leave your message here..."></textarea>
        </div>
        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Send Message
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
