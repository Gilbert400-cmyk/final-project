import React from "react";

export default function Button({ text, variant = "primary" }) {
  const styles = {
    primary:
      "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition",
    secondary:
      "bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 transition",
  };

  return <button className={styles[variant]}>{text}</button>;
}
