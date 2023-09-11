/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TableHeader = ({ screen, className }) => {
  return (
    <div className={`table-header screen-3-${screen} ${className}`}>
      <div className="table-headers">
        <div className="rank-artist">
          <div className="text-wrapper-2">#</div>
          <div className="text-wrapper-3">Artist</div>
        </div>
        <div className="stats-header">
          <div className="change">
            <div className="change-2">
              {["desktop", "tablet"].includes(screen) && <>Change</>}

              {screen === "mobile" && <>Volume</>}
            </div>
          </div>
          {["desktop", "tablet"].includes(screen) && (
            <div className="nfts-sold">
              <div className="div-3">
                {screen === "desktop" && <>NFTs Sold</>}

                {screen === "tablet" && <>Volume</>}
              </div>
            </div>
          )}

          {screen === "desktop" && (
            <div className="volume">
              <div className="div-3">Volume</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TableHeader.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
