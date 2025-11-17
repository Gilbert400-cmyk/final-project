// Testimonials.jsx

import React, { useState } from 'react';
// Install 'lucide-react' for the arrows: npm install lucide-react
import { ArrowLeft, ArrowRight } from 'lucide-react'; 

// --- Dummy Data ---
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Ramm Tech products are top quality! My RammBook laptop is incredibly fast and reliable. The design is sleek and the battery life is unmatched..",
    name: "Raul Ramm",
    title: "Manager green tech elecronics",
    image: "https://th.bing.com/th?q=Cartton+A&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247", // Placeholder Avatar
    projectImage: "https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D" 
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };
  
  // Note on Fonts: Tailwind uses a default sans-serif stack (system-ui, sans-serif) 
  // which generally looks like the image. If you need a specific font (e.g., Poppins, Inter),
  // you must configure it in your tailwind.config.js.

  // Note on Colors: The active button color is set to a deep teal/dark green: bg-gray-700/80 
  // (using opacity to match the perceived color in the image).

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-16"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Container: Sets up the two-column structure */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Text Content and Navigation */}
          <div className="w-full lg:w-5/12 pt-1">
            
            {/* Heading: Exact position aligned with the image's top edge */}
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
              What People Are Saying About Us
            </h2>

            {/* Author Info Block */}
            <div className="flex items-center space-x-4 mb-8">
              {/* Avatar Image: 64x64px (h-16 w-16) with object-cover */}
              <img 
                className="h-16 w-16 rounded-full object-cover shrink-0" 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
              />
              <div className="flex flex-col justify-center">
                {/* Author Name: Semi-bold text */}
                <p className="text-lg font-semibold text-gray-900 leading-snug">
                  {currentTestimonial.name}
                </p>
                {/* Author Title/Company: Light gray text */}
                <p className="text-base text-gray-600 leading-snug">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            {/* Quote */}
            {/* The line height and text size are crucial for visual match */}
            <p className="text-xl text-gray-800 leading-relaxed mb-12 lg:pr-8">
              "{currentTestimonial.quote}"
            </p>

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              {/* Previous Button: White/Bordered */}
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              {/* Next Button: Dark Teal/Green Solid fill */}
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-3 bg-gray-700/80 text-white rounded-full hover:bg-gray-800 transition duration-150 shadow-md"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Project Image */}
          <div className="w-full lg:w-7/12">
            {/* Image is slightly rounded with a soft shadow for definition */}
            <img
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              src={currentTestimonial.projectImage}
              alt="Project Example"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;