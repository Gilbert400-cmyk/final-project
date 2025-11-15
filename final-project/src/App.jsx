import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";
import Features from "./components/sections/Features";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
         <About />
        <Features />
        <Products />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
