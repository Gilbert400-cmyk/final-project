import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      {/* Use the standard wide container and define the grid structure */}
      {/* Structure: [Image/Logo | Text Content | Hidden Spacer] -> Effectively a left-aligned 2-column layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 items-start gap-12 lg:gap-16">

        {/* Column 1 (Image/Logo) - Takes up one column and is aligned to the left */}
        {/* Changed justify-end to justify-start */}
        <div className="lg:col-span-1 mt-6 lg:mt-0 flex justify-center lg:justify-start">
          <img
            // This Base64 image represents the "RAMM TECHNOLOGIES" logo
            src="https://tse3.mm.bing.net/th/id/OIP.SV7yOLQjZrhN_FS-6C1bkgHaEL?w=267&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
            alt="Ramm Technologies Logo"
            className="w-full max-w-xs h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
        
        
        <div className="lg:col-span-1 space-y-4 text-left">
          <h2 className="text-4xl font-bold text-gray-900">About Ramm Tech</h2>
          <p className="text-gray-600 leading-relaxed">
            Ramm Tech is your trusted hub for high-quality electronic tools and smart devices. 
            Our mission is to bring innovation, reliability, and performance into your everyday life — 
            whether at home or in business.
          </p>
          <p className="text-gray-600 leading-relaxed hidden sm:block">
            Our commitment to sustainability and cutting-edge design ensures that every product 
            you purchase is built to last and provides exceptional user experience. We prioritize 
            quality, design, and customer satisfaction above all else.
          </p>
        </div>

        
        <div className="hidden lg:block"></div>

      </div>
    </section>
  );
}