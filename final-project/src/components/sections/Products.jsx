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
    { title: "UltraPro Laptop X15", desc: "Lightweight, fast, and powerful.", img: "https://tse1.mm.bing.net/th/id/OIP.p6qRT-8ICCJ91-hvQirVpAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "SmartPhone Edge S20", desc: "AI photography and 5G speed.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
    { title: "4K Ultra HD Smart TV", desc: "Cinema-quality visuals at home.", img: "https://tse4.mm.bing.net/th/id/OIP.E5GhpX9UCgyRZd8JR6LacQHaG4?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "Nova Smartwatch X3", desc: "Track fitness and stay connected.", img: "https://infinixstore.eu/cdn/shop/files/5_8d64ddf3-cd47-4c21-b52b-493e17a42e73.png?v=1732790614&width=1600" },
    { title: "ProHeat Microwave", desc: "Compact and energy-efficient.", img: "https://th.bing.com/th/id/OIP.ZDuJ_ZEa_2iPQdEijMMWNQHaET?w=312&h=181&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" },
    { title: "FrostMax Smart Fridge", desc: "IoT-enabled cooling efficiency.", img: "https://img.freepik.com/premium-photo/smart-fridge-isolated-white-background_971989-27138.jpg?w=1380" },
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