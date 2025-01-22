import React, { useState } from "react";

const Card = ({ title, description, cardImage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const truncatedDescription =
    description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col">
      <img
        src={cardImage}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">{title}</h3>
      <div className="flex-grow mb-4">
        <p className="text-gray-300">
          {isExpanded ? description : truncatedDescription}
          {description.length > 100 && (
            <button
              onClick={handleToggle}
              className="text-[#00EEFF] font-semibold ml-2 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
      <div className="mt-auto">
        <a
          href="https://drive.google.com/your-project-link"
          rel="noopener noreferrer"
          className="text-[#00EEFF] font-semibold hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
