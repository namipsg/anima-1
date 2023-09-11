/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar1 } from "../Avatar1";
import { PropertyMediumWrapper } from "../PropertyMediumWrapper";
import "./style.css";

export const ArtistCard = ({
  rankingNumber2 = true,
  additionalInfo = true,
  artistName = "Dish Studio",
  totalSales = "Total Sales:",
  rankingNumber = "1",
  salesNumber = "34.53 ETH",
  property1,
  className,
  propertyMediumWrapper = <Avatar1 className="avatar-1-instance" />,
  divClassName,
  override = <Avatar1 className="design-component-instance-node" />,
}) => {
  return (
    <div className={`artist-card property-1-${property1} ${className}`}>
      {["default", "horizontal-big"].includes(property1) && (
        <>
          <div className="artist-avatar">
            <PropertyMediumWrapper
              className={`${property1 === "horizontal-big" ? "class-8" : "class-9"}`}
              override={override}
              property1={property1 === "horizontal-big" ? "medium" : "big"}
            />
          </div>
          <div className="artist-info">
            <div className="dish-studio">{artistName}</div>
            {additionalInfo && (
              <div className="additional-info">
                <div className="total-sales">{totalSales}</div>
                <div className="element-ETH">{salesNumber}</div>
              </div>
            )}
          </div>
          <>
            {rankingNumber2 && (
              <div className="ranking-number">
                <div className="element-2">{rankingNumber}</div>
              </div>
            )}
          </>
        </>
      )}

      {["horizontal-medium", "horizontal-small"].includes(property1) && (
        <>
          <PropertyMediumWrapper className="avatar-instance" override={propertyMediumWrapper} property1="small" />
          <div className={`dish-studio-2 ${divClassName}`}>{artistName}</div>
        </>
      )}
    </div>
  );
};

ArtistCard.propTypes = {
  rankingNumber2: PropTypes.bool,
  additionalInfo: PropTypes.bool,
  artistName: PropTypes.string,
  totalSales: PropTypes.string,
  rankingNumber: PropTypes.string,
  salesNumber: PropTypes.string,
  property1: PropTypes.oneOf(["horizontal-medium", "horizontal-big", "horizontal-small", "default"]),
};
