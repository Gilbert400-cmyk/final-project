import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top Footer Section (General content, links, etc.) */}
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-12">
         {/* Simple layout: Logo on the left, quick links on the right */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
             <h4 className="text-white text-2xl font-semibold mb-4 md:mb-0">Ramm-tech</h4>
             <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <a href="#about" className="hover:text-white transition duration-150">About Us</a>
                <a href="#products" className="hover:text-white transition duration-150">Shop</a>
                <a href="#" className="hover:text-white transition duration-150">Privacy Policy</a>
             </nav>
         </div>
      </div>
      
      {/* Bottom Footer Bar (Black background for contrast) */}
      <div className="bg-black py-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Fixed the alignment to be left-aligned */}
            <p className="text-sm text-gray-500 text-left">
              © 2025 Ramm-tech. All rights reserved. Powered by Ramm Tech Ltd.
            </p>
          </div>
      </div>
    </footer>
  );
}