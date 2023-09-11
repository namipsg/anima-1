/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArtistCard } from "../ArtistCard";
import { Avatar1 } from "../Avatar1";
import "./style.css";

export const TableItems = ({
  nftsSold = "602",
  rank = "1",
  change = "+1.41%",
  volume = "12.4 ETH",
  screen,
  artistCardPropertyMediumWrapper = <Avatar1 className="asset-2" />,
  artistCardArtistName = "Dish Studio",
  divClassName,
  className,
  override = <Avatar1 className="asset-3" />,
}) => {
  return (
    <div className={`table-items screen-11-${screen} ${className}`}>
      <div className="div-4">
        <div className="rank-artist-2">
          <div className="element-wrapper">
            <div className={`element-3 ${divClassName}`}>{rank}</div>
          </div>
          <ArtistCard
            additionalInfo={screen === "desktop" ? false : undefined}
            artistName={artistCardArtistName}
            className={`${screen === "tablet" ? "class-10" : screen === "mobile" ? "class-11" : "class-12"}`}
            divClassName={`${["mobile", "tablet"].includes(screen) && "class-13"}`}
            override={override}
            property1={
              screen === "tablet" ? "horizontal-medium" : screen === "mobile" ? "horizontal-small" : "horizontal-big"
            }
            propertyMediumWrapper={artistCardPropertyMediumWrapper}
            rankingNumber2={screen === "desktop" ? false : undefined}
          />
        </div>
        <div className="stats">
          {["desktop", "tablet"].includes(screen) && (
            <>
              <div className="change-3">
                <div className="element-4">{change}</div>
              </div>
              <div className="nfts-sold-2">
                <div className="div-5">
                  {screen === "desktop" && <>{nftsSold}</>}

                  {screen === "tablet" && <>{volume}</>}
                </div>
              </div>
            </>
          )}

          {screen === "desktop" && (
            <div className="element-ETH-wrapper">
              <div className="div-5">{volume}</div>
            </div>
          )}

          {screen === "mobile" && <div className="element-ETH-2">{volume}</div>}
        </div>
      </div>
    </div>
  );
};

TableItems.propTypes = {
  nftsSold: PropTypes.string,
  rank: PropTypes.string,
  change: PropTypes.string,
  volume: PropTypes.string,
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  artistCardArtistName: PropTypes.string,
};
