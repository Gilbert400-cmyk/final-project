import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Elevate Your Laptop Experience
          Ramm tech is your answer
        </h2>
        <p className="text-gray-600 mb-6">
          Premium accessories designed for comfort, performance, and style.
          From desks to backpacks — Ramm Technologies has you covered.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-10">
        <img
          src="https://th.bing.com/th?q=Logo+for+Jr+Ramm&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Laptop workspace"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </div>
    </section>
  );
}
