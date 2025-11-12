import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-blue-600 text-white py-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Get 10% Off Your First Order</h3>
      <p className="mb-6 text-blue-100">
        Join our newsletter for exclusive deals, updates, and offers.
      </p>
      <form className="flex justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-2/3 rounded-lg text-gray-900 focus:outline-none"
        />
        <button className="bg-gray-300 text-gray-800 font-semibold px-4 py-3 rounded-lg hover:bg-gray-400 transition">
          Subscribe here
        </button>
      </form>
    </section>
  );
}
