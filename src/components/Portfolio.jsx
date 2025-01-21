import React, { useEffect, useState } from 'react';
import Card from './Card';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-white gap-3 font-bold text-center mb-12">
         My <span className="text-[#00EEFF]">Portfolio</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Cards */}
          {portfolio.map((port) => (
            <Card 
              key={port.id}
              title={port.title} 
              description={port.description} 
              cardImage={port.img} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
