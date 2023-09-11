/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Camera = ({ className }) => {
  return (
    <svg
      className={`camera ${className}`}
      fill="none"
      height="80"
      viewBox="0 0 80 80"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M65 65H15C13.6739 65 12.4021 64.4732 11.4645 63.5355C10.5268 62.5979 10 61.3261 10 60V25C10 23.6739 10.5268 22.4021 11.4645 21.4645C12.4021 20.5268 13.6739 20 15 20H25L30 12.5H50L55 20H65C66.3261 20 67.5979 20.5268 68.5355 21.4645C69.4732 22.4021 70 23.6739 70 25V60C70 61.3261 69.4732 62.5979 68.5355 63.5355C67.5979 64.4732 66.3261 65 65 65Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        className="path"
        d="M40 52.5C46.2132 52.5 51.25 47.4632 51.25 41.25C51.25 35.0368 46.2132 30 40 30C33.7868 30 28.75 35.0368 28.75 41.25C28.75 47.4632 33.7868 52.5 40 52.5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};
