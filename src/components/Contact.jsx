import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaCopy } from 'react-icons/fa'; // Add react-icons for icons

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to a server or email)
    console.log(formData);
  };

  // Function to copy text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <section id='contact' className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-white mb-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-[#00EEFF]">Me</span>
        </h2>
          <p className="mb-6">Feel free to reach out to me by filling out the form or using the information below:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section (Address, Phone, Email with Copy Icons) */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-xl font-semibold text-[#00EEFF]">Address:</h3>
                <p>1234 Your Street, City, Country</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div className="text-white flex items-center">
                <FaPhone className="text-[#00EEFF] mr-2" />
                <span>(+123) 456-7890</span>
              </div>
              <FaCopy
                className="text-[#00EEFF] cursor-pointer"
                onClick={() => handleCopy('(+123) 456-7890')}
              />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div className="text-white flex items-center">
                <FaEnvelope className="text-[#00EEFF] mr-2" />
                <span>yourname@example.com</span>
              </div>
              <FaCopy
                className="text-[#00EEFF] cursor-pointer"
                onClick={() => handleCopy('yourname@example.com')}
              />
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-white" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
                  required
                />
              </div>
              <div>
                <label className="block text-white" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
                  required
                />
              </div>
              <div>
                <label className="block text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EEFF]"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00EEFF] text-black font-semibold rounded-lg hover:bg-[#00b8cc] transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
