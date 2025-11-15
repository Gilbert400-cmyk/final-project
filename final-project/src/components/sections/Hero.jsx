import React from "react";
import { Users, Briefcase, Box, Tag } from 'lucide-react';

// --- MOCK NAVIGATION COMPONENT ---
const TopNavigation = () => (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <div className="text-3xl font-extrabold tracking-wide">weCan</div>
            <div className="flex space-x-8 text-base font-semibold">
                <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
                <a href="#" className="hover:text-amber-400 transition-colors">About</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Features</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
        </div>
    </nav>
);

// --- STATS BAR COMPONENT (Updated for Tech Theme) ---
const StatsBar = () => {
    const stats = [
        { icon: Briefcase, count: "12", label: "Years in Tech" },
        { icon: Users, count: "5M+", label: "Happy Customers" },
        { icon: Box, count: "50k+", label: "Products Sold" },
        { icon: Tag, count: "500+", label: "Brands Available" },
    ];

    return (
        <div className="absolute bottom-0 left-0 w-full z-20 bg-teal-800/90 backdrop-blur-sm shadow-2xl">
            <div className="max-w-7xl mx-auto flex justify-around py-6 px-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center text-white p-2">
                        <stat.icon size={36} className="text-amber-300 mb-2" />
                        <div className="text-4xl font-bold mb-1">{stat.count}</div>
                        <div className="text-sm font-medium opacity-80">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- HERO SECTION COMPONENT ---
const Hero = () => {
    // Using the base64 image provided for the background
    const HERO_BG_IMAGE = "data:image/webp;base64,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";

    return (
        <section 
            id="hero"
            className="relative w-full h-screen max-h-[850px] min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${HERO_BG_IMAGE}')`,
                }}
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Centered Content */}
            {/* The flex container below uses 'items-center' to horizontally center all its children, including the button. */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center pt-20">
                
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-snug mb-6 drop-shadow-lg">
                    Creative Tech Simplifies Your Everyday.
                </h1>

                {/* Sub-headline / Descriptive Text */}
                <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10 font-light drop-shadow-md">
                    Discover laptops, phones, TVs, smartwatches and premium tech that 
                    enhances productivity and comfort in your daily life.
                </p>

                {/* Call to Action Button */}
                <button
                    className="px-10 py-3 bg-amber-400 text-gray-900 text-lg font-bold rounded-md shadow-2xl hover:bg-amber-500 transition duration-300 transform hover:scale-[1.05]"
                >
                    Shop Now
                </button>
            </div>

            <StatsBar />
        </section>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopNavigation />
            <Hero />
           
        </div>
    );
};

export default App;