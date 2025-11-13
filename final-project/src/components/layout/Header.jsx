import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Ramm Tech</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#products" className="hover:text-blue-500">Products</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#newsletter" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}
