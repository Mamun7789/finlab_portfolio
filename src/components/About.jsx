import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-[#00EEFF]">Me</span>
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education and Certification Card 1 */}
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold text-[#00EEFF] mb-4">
              Education & Certification
            </h4>
            <p className="text-sm leading-6 text-gray-300">
              <strong>Jahangirnagar University</strong> <br />
              M.B.A. Degree in Accounting <br />
              Graduated 2020
            </p>
            <hr className="my-4 border-gray-400" />
            <p className="text-sm leading-6 text-gray-300">
              <strong>Udemy</strong> Power BI Certification <br />
              2020
            </p>
          </div>

          {/* Education and Certification Card 2 */}
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold text-[#00EEFF] mb-4">
              Education & Certification
            </h4>
            <p className="text-sm leading-6 text-gray-300">
              <strong>United International University</strong> <br />
              Associate Degree in Accounting <br />
              Graduated 2024
            </p>
            <hr className="my-4 border-gray-400" />
            <p className="text-sm leading-6 text-gray-300">
              <strong>AIPB</strong> Bookkeeping and Accounting Certification <br />
              2020
            </p>
          </div>

          {/* Education and Certification Card 3 */}
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold text-[#00EEFF] mb-4">
              Education & Certification
            </h4>
            <p className="text-sm leading-6 text-gray-300">
              <strong>Jahangirnagar University</strong> <br />
              M.B.A. Degree in Accounting <br />
              Graduated 2020
            </p>
            <hr className="my-4 border-gray-400" />
            <p className="text-sm leading-6 text-gray-300">
              <strong>QuickBooks</strong> QuickBooks Online Certification <br />
              2024
            </p>
            <hr className="my-4 border-gray-400" />
            <p className="text-sm leading-6 text-gray-300">
              <strong>QuickBooks</strong> QuickBooks Online Advanced Certification <br />
              2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
