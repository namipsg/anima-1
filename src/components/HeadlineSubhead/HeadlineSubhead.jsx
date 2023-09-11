/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeadlineSubhead = ({ screen, className }) => {
  return (
    <div className={`headline-subhead ${screen} ${className}`}>
      <div className="div-2">
        <div className="headline">
          <div className="text-wrapper">Top Creators</div>
        </div>
        <div className="subhead">
          <p className="p">Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
      </div>
    </div>
  );
};

HeadlineSubhead.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "default"]),
};
