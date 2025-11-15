import React from 'react';

// Card Component Definition
// This component was previously imported from "../common/Card" but is defined here
// to comply with the single-file React mandate.
const Card = ({ title, desc, img }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      {/* Product Image */}
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:opacity-90"
          // Fallback image source in case the data URI or external URL fails
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = `https://placehold.co/800x400/374151/FFFFFF?text=${encodeURIComponent(title)}`;
            e.target.style.objectFit = 'contain';
          }}
        />
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{desc}</p>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 shadow-lg shadow-indigo-500/50">
          View Details
        </button>
      </div>
    </div>
  );
};

// Products Component Definition
export default function Products() {
  // Original product data, including base64 strings and external URLs
  const products = [
    { title: "UltraPro Laptop X15", desc: "Lightweight, fast, and powerful.", img: "https://tse1.mm.bing.net/th/id/OIP.PDjfkNak0YEg7c7azPvyHAHaHa?w=157&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" },
    { title: "SmartPhone Edge S20", desc: "AI photography and 5G speed.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
    { title: "4K Ultra HD Smart TV", desc: "Cinema-quality visuals at home.", img: "https://th.bing.com/th/id/OIP.wVuHcMpOKfGgl9RUkyCBqgHaE8?w=281&h=188&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" },
    { title: "Nova Smartwatch X3", desc: "Track fitness and stay connected.", img: "https://tse4.mm.bing.net/th/id/OIP.g9C5JHu0gnqZa4u7jPo_OgHaJd?w=180&h=220&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" },
    { title: "ProHeat Microwave", desc: "Compact and energy-efficient.", img: "https://th.bing.com/th/id/OIP.ZDuJ_ZEa_2iPQdEijMMWNQHaET?w=312&h=181&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" },
    { title: "FrostMax Smart Fridge", desc: "IoT-enabled cooling efficiency.", img: "data:image/webp;base64,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" },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          Explore Our Cutting-Edge Electronics
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((p, i) => (
            <Card key={i} title={p.title} desc={p.desc} img={p.img} />
          ))}
        </div>
        
        <div className="mt-16">
            <button className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-150 inline-flex items-center">
                See All Products &rarr;
            </button>
        </div>
      </div>
    </section>
  );
}