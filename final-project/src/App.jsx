import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Section from "./components/common/Section";

export default function App() {
  return (
    <div className="font-sans bg-neutralLight text-neutralDark">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <Section><Features /></Section>
        <Section><About /></Section>
        <Section><Products /></Section>
        <Section><Testimonials /></Section>
        <Section><Newsletter /></Section>
      </main>
      <Footer />
    </div>
  );
}
