import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-blue-600 text-white py-16 text-center">
      {/* Used wide container for content centering */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h3 className="text-3xl font-semibold mb-4">Get 10% Off Your First Order</h3>
        <p className="mb-6 text-blue-100">
          Join our newsletter for exclusive deals, updates, and offers.
        </p>
        <form className="flex justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-2/3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          {/* Changed button color for better contrast against the blue background */}
          <button className="bg-white text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition shadow-md">
            Subscribe here
          </button>
        </form>
      </div>
    </section>
  );
}