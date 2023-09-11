/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BurgerMenu = ({ className }) => {
  return (
    <svg
      className={`burger-menu ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M4 8C4 7.44772 4.44772 7 5 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H5C4.44772 9 4 8.55228 4 8Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M4 24C4 23.4477 4.44772 23 5 23H20C20.5523 23 21 23.4477 21 24C21 24.5523 20.5523 25 20 25H5C4.44772 25 4 24.5523 4 24Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};
