// src/components/sections/Hero.jsx
import React from "react";
import { Laptop, Phone, Tv, Watch } from "lucide-react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] lg:h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://tse4.mm.bing.net/th/id/OIP.nTJJGgspUMyEtKTnIXaI9AHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 lg:px-0">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-200 mb-3">
            Ramm Tech • Electronics
          </p>

          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Creative Tech Simplifies Your Everyday.
          </h1>

          <p className="text-sm lg:text-base text-gray-200 max-w-md mb-6">
            Discover laptops, phones, TVs, smartwatches and premium tech that 
            enhances productivity and comfort in your daily life.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button label="Shop Now" />
            <button className="text-sm font-medium text-white hover:text-gray-300">
              View Collections
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Icon Feature Bar */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-teal-700/95 backdrop-blur-md py-4 lg:py-6 shadow-lg">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0">

            {/* Item 1 */}
            <div className="flex flex-col items-center text-white">
              <Laptop size={26} className="mb-2" />
              <p className="text-sm font-semibold">Latest Laptops</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-white">
              <Phone size={26} className="mb-2" />
              <p className="text-sm font-semibold">Smart Phones</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-white">
              <Tv size={26} className="mb-2" />
              <p className="text-sm font-semibold">LED & Smart TVs</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-white">
              <Watch size={26} className="mb-2" />
              <p className="text-sm font-semibold">Smart Watches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
