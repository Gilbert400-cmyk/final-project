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
    const HERO_BG_IMAGE = "https://media.theresanaiforthat.com/icons/tech-guru.png"
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