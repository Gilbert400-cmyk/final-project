import React from "react";
import PropTypes from "prop-types";

export default function Card({ title, desc, img }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
