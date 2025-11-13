import React from "react";
import Section from "../common/Section";

export default function Testimonials() {
  return (
    <Section id="testimonials" title="What Clients Say About Ramm Tech">
      <div className="max-w-3xl mx-auto space-y-8">
        <blockquote className="italic text-gray-700">
          “Ramm Tech products are top quality! My RammBook laptop is incredibly fast and reliable.”
          <br /> <span className="font-bold text-blue-600">– Alice W.</span>
        </blockquote>
        <blockquote className="italic text-gray-700">
          “Best service and durable electronics. Highly recommend their smart TVs!”
          <br /> <span className="font-bold text-blue-600">– Brian K.</span>
        </blockquote>
      </div>
    </Section>
  );
}
