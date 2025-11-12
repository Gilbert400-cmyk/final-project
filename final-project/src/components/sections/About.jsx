import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYs6umncWAt_JRltabQRlap1h5jMO39jp4UmHkfqcd3ecLFKnMBVtDDmJg6GHj2Zc2de2qoqgXifV9Ip_HodD-x1iZ_P90p7iK3oS0dW391MXffD5KDw_0zBsaHdCTxjduDAM-mHo&usqp=CAc"
            alt="About RAMM TECH"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 md:pl-12 text-right">
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">
            We Power Your Laptop Lifestyle
          </h3>
          <p className="text-gray-600 mb-8">
            Our premium quality laptop accessories enhance workflow comfort,
            speed, and productivity. Every product is crafted for modern
            professionals and creators.
          </p>

          <div className="space-y-6">
            {[
              { title: "Fast Delivery", desc: "Get your accessories quickly with our 24hr delivery system." },
              { title: "Smart Designs", desc: "Ergonomically built for performance, portability, and comfort." },
              { title: "Professional Quality", desc: "Built with precision tools used by professional studios." },
              { title: "Long lasting", desc: "durable accessorries with tools to keep them safe for long." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl shadow text-right">
                <h4 className="font-bold mb-2 text-blue-600">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
