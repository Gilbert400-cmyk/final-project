import React from "react";

export default function Navigation() {
  return (
    <nav className="flex space-x-6 text-gray-600 font-medium">
      <a href="#about" className="hover:text-blue-600">About</a>
      <a href="#products" className="hover:text-blue-600">Products</a>
      <a href="#newsletter" className="hover:text-blue-600">Newsletter</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>
    </nav>
  );
}
