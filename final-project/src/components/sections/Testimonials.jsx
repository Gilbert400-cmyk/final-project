import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          What Our Customers Say
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
          <p className="text-gray-700 italic mb-4">
            “RAMM TECH’s laptop stand completely changed how I work —
            comfortable, stylish, and built to last!”
          </p>
          <h4 className="font-semibold text-blue-600">— Gilbert 22, Designer</h4>
        </div>
      </div>
    </section>
  );
}
