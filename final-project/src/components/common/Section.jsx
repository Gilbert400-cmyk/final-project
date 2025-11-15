import React from "react";
import PropTypes from "prop-types";

// This component ensures all content sections have consistent vertical padding and width.
export default function Section({ id, title, children }) {
  return (
    // Used py-16 for tighter vertical spacing
    <section id={id} className="py-16 bg-gray-50">
      {/* Standard wide container for all section content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {title && (
          // Adjusted heading style for more visual impact
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};