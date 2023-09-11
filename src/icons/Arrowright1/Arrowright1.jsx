/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Arrowright1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrowright-1 ${className}`}
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
        d="M10.8081 3.93306C11.0521 3.68898 11.4479 3.68898 11.6919 3.93306L17.3169 9.55806C17.561 9.80214 17.561 10.1979 17.3169 10.4419L11.6919 16.0669C11.4479 16.311 11.0521 16.311 10.8081 16.0669C10.564 15.8229 10.564 15.4271 10.8081 15.1831L15.9911 10L10.8081 4.81694C10.564 4.57286 10.564 4.17714 10.8081 3.93306Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Arrowright1.propTypes = {
  color: PropTypes.string,
};
