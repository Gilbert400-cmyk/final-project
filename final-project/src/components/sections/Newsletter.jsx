// Newsletter.jsx - Updated with Standard Blue Background

import React from 'react';

const Newsletter = () => {
  // Define the new solid BLUE color 
  const primaryBlue = '#1E88E5'; // A strong blue color
  
  // URL for the lamp image itself
  // IMPORTANT: Replace this path with the actual path or URL to your lamp image.
  const lampImageUrl = "https://cdn.shopify.com/s/files/1/2469/6071/t/19/assets/cxoxnothing_blog7-1659083900577.jpg?v=1659083901"; 
  
  return (
    // Outer container: Full width, applying the solid BLUE background color
    <section className="w-full py-20 sm:py-24 lg:py-32" style={{ backgroundColor: primaryBlue }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Creates the Image Space (left) and Content Space (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Lamp Image - Positioned slightly lower for balance */}
          <div className="lg:col-span-6 flex justify-center items-center h-full relative">
            <img 
              src={lampImageUrl} 
              alt="Decorative Lamp" 
              // Size and vertical offset (translate-y) maintained
              className="max-w-[90%] h-auto object-contain transform translate-y-8 lg:translate-y-10" 
            />
          </div>

          {/* Right Column: Content Block (Text and Form) */}
          <div className="lg:col-span-6 text-left z-10 p-4 lg:p-0">
            
            {/* Main Heading: White, bold, tight spacing */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight"> 
              Get more discount <br />
              Off your order
            </h2>

            {/* Sub-heading: Light gray color retained for contrast */}
            <p className="text-lg mb-8" style={{ color: '#CFD8DC' }}> {/* Light blue shade for contrast */}
              Join our mailing list
            </p>

            {/* Form */}
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg items-center">
              
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                // Input field styling (white background, gray placeholder)
                className="w-full flex-grow px-5 py-3 border border-transparent text-base text-gray-900 
                           placeholder-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white bg-white"
                placeholder="Your email address"
              />
              
              {/* Shop Now Button: Dark Gray/Black color maintained for high contrast button */}
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white 
                           bg-gray-800 hover:bg-gray-900 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              >
                Shop Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;