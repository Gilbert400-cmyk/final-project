import React from "react";
import Card from "../common/Card";

const LIST = [
  { title: "Ergonomic Stands", description: "Improve posture & cooling — aluminum designs.", image: "/src/assets/images/product1.jpg" },
  { title: "Precision Peripherals", description: "Low-latency mice & premium silent keyboards.", image: "/src/assets/images/product2.jpg" },
  { title: "Travel & Protection", description: "Durable sleeves, bags and hubs for remote work.", image: "/src/assets/images/product3.jpg" }
];

export default function Features() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 gap-6">
        {LIST.map((it, idx) => <Card key={idx} title={it.title} description={it.description} image={it.image} />)}
      </div>
    </div>
  );
}
