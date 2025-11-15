import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Use a wide container for expansive layout */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-bold text-blue-600">RAMM TECH</h1>
        {/* Adjusted navigation spacing and hover effects */}
        <nav className="space-x-8 hidden md:flex text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-600 transition duration-150">Home</a>
          <a href="#about" className="hover:text-blue-600 transition duration-150">About</a>
          <a href="#products" className="hover:text-blue-600 transition duration-150">Products</a>
          <a href="#newsletter" className="hover:text-blue-600 transition duration-150">Contact</a>
        </nav>
      </div>
    </header>
  );
}