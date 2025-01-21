import React from 'react';

const Card = ({ title, description, cardImage }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
      <img
        src={cardImage} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-[#00EEFF] mb-4">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">
        {description} 
      </p>
      <a
        href="https://drive.google.com/your-project-link" 
        rel="noopener noreferrer"
        className="text-[#00EEFF] font-semibold hover:underline"
      >
        View Project
      </a>
    </div>
  );
}

export default Card;
