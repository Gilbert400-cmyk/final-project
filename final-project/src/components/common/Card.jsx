import React from "react";

export default function Card({ title, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">Premium laptop accessory. RAMM TECH DEALS</p>
      </div>
    </div>
  );
}
