/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Wallet = ({ className }) => {
  return (
    <svg
      className={`wallet ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9H27C27.5304 9 28.0391 9.21071 28.4142 9.58579C28.7893 9.96086 29 10.4696 29 11V25C29 25.5304 28.7893 26.0391 28.4142 26.4142C28.0391 26.7893 27.5304 27 27 27H7C6.20435 27 5.44129 26.6839 4.87868 26.1213C4.31607 25.5587 4 24.7957 4 24V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H24C24.5523 5 25 5.44772 25 6C25 6.55228 24.5523 7 24 7H7ZM6 10.8284V24C6 24.2652 6.10536 24.5196 6.29289 24.7071C6.48043 24.8946 6.73478 25 7 25H27V11H7C6.65606 11 6.3182 10.9409 6 10.8284Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M22.5 19.5C23.3284 19.5 24 18.8284 24 18C24 17.1716 23.3284 16.5 22.5 16.5C21.6716 16.5 21 17.1716 21 18C21 18.8284 21.6716 19.5 22.5 19.5Z"
        fill="white"
      />
    </svg>
  );
};
