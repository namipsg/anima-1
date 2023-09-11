/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Walletconnect1 = ({ color = "url(#paint0_radial_2502_9406)", className }) => {
  return (
    <svg
      className={`walletconnect-1 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1950_3529)">
        <path
          className="path"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <path
          className="path"
          d="M12.5586 15.4473C16.582 11.5176 23.1133 11.5176 27.1367 15.4473L27.6211 15.9238C27.8242 16.1191 27.8242 16.4395 27.6211 16.6348L25.9648 18.252C25.8633 18.3535 25.6992 18.3535 25.5977 18.252L24.9336 17.6035C22.1211 14.8613 17.5742 14.8613 14.7617 17.6035L14.0508 18.2988C13.9492 18.4004 13.7852 18.4004 13.6836 18.2988L12.0273 16.6816C11.8242 16.4863 11.8242 16.166 12.0273 15.9707L12.5586 15.4473ZM30.5664 18.791L32.043 20.2285C32.2461 20.4238 32.2461 20.7441 32.043 20.9395L25.3945 27.4316C25.1914 27.627 24.8633 27.627 24.668 27.4316L19.9492 22.8223C19.9023 22.7754 19.8164 22.7754 19.7695 22.8223L15.0508 27.4316C14.8477 27.627 14.5195 27.627 14.3242 27.4316L7.65234 20.9395C7.44922 20.7441 7.44922 20.4238 7.65234 20.2285L9.12891 18.791C9.33203 18.5957 9.66016 18.5957 9.85547 18.791L14.5742 23.4004C14.6211 23.4473 14.707 23.4473 14.7539 23.4004L19.4727 18.791C19.6758 18.5957 20.0039 18.5957 20.1992 18.791L24.918 23.4004C24.9648 23.4473 25.0508 23.4473 25.0977 23.4004L29.8164 18.791C30.0352 18.5957 30.3633 18.5957 30.5664 18.791Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(0.000123978 20.0006) scale(40)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_1950_3529"
          r="1"
        >
          <stop className="stop" stopColor="#5D9DF6" />
          <stop className="stop" offset="1" stopColor="#006FFF" />
        </radialGradient>
        <clipPath className="clip-path" id="clip0_1950_3529">
          <rect className="rect" fill="white" height="40" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
};

Walletconnect1.propTypes = {
  color: PropTypes.string,
};
