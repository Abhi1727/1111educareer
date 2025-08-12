import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-600 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Information</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">Near Guru Ki Thadi, Manji Ka Hatha, Jodhpur</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91-7426999479</p>
            <p className="text-gray-600">+91-9664159856</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600"><a href="mailto:admin@1111educareer.in" className="text-blue-600 hover:underline">admin@1111educareer.in</a></p>
            <p className="text-gray-600"><a href="mailto:info@1111educareer.in" className="text-blue-600 hover:underline">info@1111educareer.in</a></p>
            <p className="text-gray-600"><a href="mailto:sales@1111educareer.in" className="text-blue-600 hover:underline">sales@1111educareer.in</a></p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect with us</h3>
            <a href="https://wa.me/917426999479" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 inline-block"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
