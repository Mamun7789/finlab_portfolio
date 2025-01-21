import React from 'react'

const Skills = () => {
  return (
    <section className="bg-black py-12">
    <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl text-white gap-3 font-bold text-center mb-12">
         My <span className="text-[#00EEFF]">Skills</span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">Accounting & Bookkeeping</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>QuickBooks Expert</li>
            <li>Xero Expert</li>
            <li>KashFlow Expert</li>
            <li>Bank Reconciliation Expert</li>
            <li>Income Statement Expert</li>
            <li>Cash Flow Management Expert</li>
            <li>Financial Forecasting & Modeling Expert</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">Data Analysis & Visualization</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Power BI Expert</li>
            <li>Excel Expert</li>
            <li>Tableau Expert</li>
            <li>Data Analyst</li>
            <li>Data Scientist</li>
            <li>Excel Macros Expert</li>
            <li>Dashboard Designer</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">Financial Services & Analysis</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Investment Banker</li>
            <li>Investment Planning Expert</li>
            <li>Credit Analyst</li>
            <li>Asset Manager</li>
            <li>Cash Flow Statement Expert</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">Automation & Development</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Formulas & Macros Developer</li>
            <li>Excel Macros Expert</li>
            <li>Excel Dashboard Expert</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">Customer Service & Taxation</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Customer Service Representative</li>
            <li>Income Tax Return Expert</li>
            <li>Bank Statement Reconciliation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills