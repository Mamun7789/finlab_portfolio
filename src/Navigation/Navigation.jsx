import React, { useState } from "react";
import logo from "../../src/assets/Finlab3.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <img src={logo} alt="Logo" className="w-40 h-24" />
        <ul className="hidden md:flex space-x-6">
          <li
            className={`text-white ${activeLink === "home" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#home" onClick={() => handleLinkClick("home")}>
              Home
            </a>
          </li>
          <li
            className={`text-white ${activeLink === "about" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#about" onClick={() => handleLinkClick("about")}>
              About
            </a>
          </li>
          <li
            className={`text-white ${activeLink === "skills" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#skills" onClick={() => handleLinkClick("skills")}>
              Skills
            </a>
          </li>
          <li
            className={`text-white ${activeLink === "services" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#services" onClick={() => handleLinkClick("services")}>
              Services
            </a>
          </li>
          <li
            className={`text-white ${activeLink === "portfolio" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#portfolio" onClick={() => handleLinkClick("portfolio")}>
              Portfolio
            </a>
          </li>
          <li
            className={`text-white ${activeLink === "contact" ? "text-[#00EEFF]" : "hover:text-[#00EEFF]"} `}
          >
            <a href="#contact" onClick={() => handleLinkClick("contact")}>
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {/* Hamburger icon for opening the menu */}
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            // Cross icon (X) for closing the menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white z-20">
          <ul className="space-y-4 px-6 py-4">
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "home" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#home" onClick={() => handleLinkClick("home")}>
                Home
              </a>
            </li>
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "about" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#about" onClick={() => handleLinkClick("about")}>
                About
              </a>
            </li>
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "skills" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#skills" onClick={() => handleLinkClick("skills")}>
                Skills
              </a>
            </li>
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "services" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#services" onClick={() => handleLinkClick("services")}>
                Services
              </a>
            </li>
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "portfolio" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#portfolio" onClick={() => handleLinkClick("portfolio")}>
                Portfolio
              </a>
            </li>
            <li
              className={`hover:text-[#00EEFF] ${activeLink === "contact" ? "text-[#00EEFF]" : ""}`}
            >
              <a href="#contact" onClick={() => handleLinkClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
