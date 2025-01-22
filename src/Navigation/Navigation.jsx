import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../src/assets/Finlab3.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 relative bg-opacity-80">
        <img src={logo} alt="Logo" className="w-40 h-24" />
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "skills", "services", "portfolio", "contact"].map((link) => (
            <li
              key={link}
              className={`relative group text-white cursor-pointer ${
                activeLink === link ? "text-[#00EEFF]" : ""
              }`}
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActiveLink(link)}
                className="hover:text-[#00EEFF] transition duration-300"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
         
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#00EEFF] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none cursor-pointer"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white z-20">
          <ul className="space-y-4 px-6 py-4">
            {["home", "about", "skills", "services", "portfolio", "contact"].map((link) => (
              <li
                key={link}
                className={`relative group hover:text-[#00EEFF] cursor-pointer ${
                  activeLink === link ? "text-[#00EEFF]" : ""
                }`}
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveLink(link)}
                  onClick={() => handleLinkClick(link)} 
                  className="transition duration-300"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
               
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#00EEFF] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
