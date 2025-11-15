import React from "react";
// Assumes Section is now available at this path
import Section from "../common/Section"; 

export default function Testimonials() {
  return (
    // Section wrapper handles the py-16 padding and max-w-7xl container
    <Section id="testimonials" title="What Clients Say About Ramm Tech">
      {/* Increased max-w for content to look wider and better spaced in the main container */}
      <div className="max-w-4xl mx-auto space-y-10 px-6 lg:px-0">
        <blockquote className="italic text-gray-700 text-lg border-l-4 border-blue-600 pl-4">
          “Ramm Tech products are top quality! My RammBook laptop is incredibly fast and reliable. The design is sleek and the battery life is unmatched.”
          <br /> <span className="font-bold text-blue-600 block mt-2">– Alice W., Tech Blogger</span>
        </blockquote>
        <blockquote className="italic text-gray-700 text-lg border-l-4 border-blue-600 pl-4">
          “Best service and durable electronics. Highly recommend their smart TVs! Setup was effortless and the picture quality is stunning.”
          <br /> <span className="font-bold text-blue-600 block mt-2">– Brian K., CEO of K-Enterprises</span>
        </blockquote>
      </div>
    </Section>
  );
}