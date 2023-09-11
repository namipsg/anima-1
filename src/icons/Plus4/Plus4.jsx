/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Plus4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`plus-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M10 2.5C10.3452 2.5 10.625 2.77982 10.625 3.125V16.875C10.625 17.2202 10.3452 17.5 10 17.5C9.65482 17.5 9.375 17.2202 9.375 16.875V3.125C9.375 2.77982 9.65482 2.5 10 2.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Plus4.propTypes = {
  color: PropTypes.string,
};
