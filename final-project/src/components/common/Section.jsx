import React from "react";
import PropTypes from "prop-types";

export default function Section({ children }) {
  return <section className="py-12 lg:py-16">{children}</section>;
}

Section.propTypes = { children: PropTypes.node };
