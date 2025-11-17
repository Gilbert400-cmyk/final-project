// About.jsx

import React from 'react';
// Install 'lucide-react' for the checkmark icon: npm install lucide-react
import { Check } from 'lucide-react'; 

const About = () => {
  // Data for the feature list
  const features = [
    {
      title: "Best services",
      description: "Best Services delivers reliable, high-quality solutions tailored to meet each client’s needs. Our team ensures professional, efficient, and customer-focused support every time.",
    },
    {
      title: "Durable products",
      description: "Durable Electronic Services offers high-quality electronic solutions built to last and perform reliably. We ensure every device is supported with expert care and long-term value.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-Column Grid (Image Left, Content Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image */}
          <div className="w-full lg:w-1/2 order-1">
            {/* NOTE: Replace the placeholder URL with your actual image path */}
            <img
              src="https://plus.unsplash.com/premium_photo-1683758343999-0975ec01d0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" 
              alt="Sofa and wooden coffee table"
              // Styling for rounded corners and shadow, matching the screenshot
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Column: Text Content and Features */}
          <div className="w-full lg:w-1/2 order-2">
            
            {/* Main Heading: Bold and dark text */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
             About Ramm Tech <br />
        
            </h2>

            {/* Summary Paragraph */}
            <p className="text-base text-gray-600 mb-10 max-w-md">
             Ramm Tech is your trusted hub for high-quality electronic tools and smart devices. Our mission is to bring innovation, reliability, and performance into your everyday life — whether at home or in business.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4 items-start">
                  
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-gray-800" /> {/* Dark checkmark color */}
                  </div>
                  
                  <div>
                    {/* Feature Title: Bold/Semi-bold text */}
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    {/* Feature Description: Detailed description, slightly lighter text */}
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;