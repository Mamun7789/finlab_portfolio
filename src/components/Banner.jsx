import React from 'react';
import bannerLogo from '../../src/assets/zoober3.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen container p-4 mx-auto mb-20">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Zobaeer <span className="text-[#00EEFF]">Mahmood</span>
        </h1>
        <p className="text-lg mb-6">
          Welcome! I’m a skilled professional with extensive experience in QuickBooks, Xero, Tableau, Excel, and Power BI. I specialize in delivering accurate bookkeeping, insightful financial analysis, data visualization, and custom reports that help businesses make informed decisions.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* Contact Me Button */}
          <button className="bg-[#00EEFF] hover:bg-[#00c7cc] text-black font-bold py-2 px-4 rounded transition duration-300">
            Contact Me
          </button>
          {/* Portfolio Button */}
          <button className="bg-transparent border border-[#00EEFF] hover:bg-[#00EEFF] hover:text-black text-white font-bold py-2 px-4 rounded transition duration-300">
            Portfolio
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={bannerLogo}
          alt="Banner Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
