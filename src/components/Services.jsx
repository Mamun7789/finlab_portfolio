import React, { useState } from 'react'

const Services = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (index) => {
   
    if (clickedButton === index) {
      setClickedButton(null); 
    } else {
      setClickedButton(index); 
    }
  };
  return (
    <section id='services' className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-white gap-3 font-bold text-center mb-12">
         My <span className="text-[#00EEFF]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Power BI Service Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">Power BI Services</h3>
            <p className="text-gray-300">
              Turn your data into insightful and interactive reports with Power BI. I create custom dashboards to help you make data-driven decisions effectively.
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-full font-semibold ${
                clickedButton === 1 ? 'bg-[#00EEFF] text-black' : 'bg-transparent border-2 border-[#00EEFF] text-[#00EEFF]'
              } transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(1)}
            >
              Hire Me
            </button>
          </div>
          
          {/* QuickBooks Service Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">QuickBooks Services</h3>
            <p className="text-gray-300">
              Efficiently manage your finances with QuickBooks. I help with setup, automation, and creating detailed reports for your business.
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-full font-semibold ${
                clickedButton === 2 ? 'bg-[#00EEFF] text-black' : 'bg-transparent border-2 border-[#00EEFF] text-[#00EEFF]'
              } transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(2)}
            >
              Hire Me
            </button>
          </div>
          
          {/* Xero Service Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">Xero Services</h3>
            <p className="text-gray-300">
              Xero makes accounting easy. I offer setup and configuration services, ensuring your financial data is well-organized and accessible.
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-full font-semibold ${
                clickedButton === 3 ? 'bg-[#00EEFF] text-black' : 'bg-transparent border-2 border-[#00EEFF] text-[#00EEFF]'
              } transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(3)}
            >
              Hire Me
            </button>
          </div>
          
          {/* Excel Service Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-[#00EEFF] mb-4">Excel Services</h3>
            <p className="text-gray-300">
              From advanced formulas to building dynamic dashboards, I offer customized Excel services to automate your data analysis and reporting.
            </p>
            <button
              className={`mt-4 py-2 px-4 rounded-full font-semibold ${
                clickedButton === 4 ? 'bg-[#00EEFF] text-black' : 'bg-transparent border-2 border-[#00EEFF] text-[#00EEFF]'
              } transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(4)}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services