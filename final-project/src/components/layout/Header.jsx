import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-3 md:mb-0">
          RAMM TECH
        </h1>
        <Navigation /> 
      </div>
    </header>
  );
}
