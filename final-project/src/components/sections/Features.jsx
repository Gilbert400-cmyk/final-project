import React from "react";
import Card from "../common/Card";

export default function Features() {
  const features = [
    {
      title: "Precision Engineering",
      desc: "Every tool is crafted with unmatched accuracy for superior performance.",
      img: "/assets/images/feature1.jpg",
    },
    {
      title: "Smart Connectivity",
      desc: "Bluetooth-enabled tools that connect to your devices for real-time feedback.",
      img: "/assets/images/feature2.jpg",
    },
    {
      title: "Sustainable Power",
      desc: "Eco-friendly rechargeable batteries built for durability and long use.",
      img: "/assets/images/feature3.jpg",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} desc={feature.desc} img={feature.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
