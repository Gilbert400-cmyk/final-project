// Footer.jsx

import React from 'react';

import { Instagram, Facebook, Twitter, Github, Linkedin } from 'lucide-react'; 

const footerLinks = [
  {
    title: "what we offer",
    links: ["Technical assistance", "Quality sales", "Aftersale services", "Guidance"]
  },
  {
    title: "Advanced Features",
    links: ["Tracking system", "Help button", "Social economic"]
  },
  {
    title: "Resources",
    links: ["Support features"]
  },
  {
    title: "Company",
    links: ["About Us", "shop", "privacy policy"]
  },

];

const Footer = () => {
 
  const darkBg = '#1E2024'; 
  const logoText = '#E0E7E8';
  const linkText = '#A0AEC0';

  return (
    <footer className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: darkBg, color: linkText }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-10">
          
        
          <div className="text-2xl font-semibold mb-8 sm:mb-0" style={{ color: logoText }}>
            Believing in posibilities
          </div>
        
          <div className="flex space-x-3">
            {[Instagram, Facebook, Twitter, Github, Linkedin].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                aria-label={Icon.displayName || 'Social link'}
                // Styling the circular dark background
                className="p-3 rounded-full transition duration-150 flex items-center justify-center"
                style={{ backgroundColor: '#2C2F33', color: linkText, width: '40px', height: '40px' }} 
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-10"></div>

        {/* Links Grid: 5 columns on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex}>
              {/* Column Title: Bolder text, slightly lighter color */}
              <h3 className="text-lg font-bold mb-4" style={{ color: logoText }}>
                {column.title}
              </h3>
              {/* Links List */}
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm hover:text-white transition duration-150"
                      style={{ color: linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
        <div className="text-center text-sm pt-8" style={{ borderTop: '1px solid #2C2F33', color: linkText }}>
          &copy; Ramm tech 2025 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;