/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Rocketlaunch } from "../../icons/Rocketlaunch";
import "./style.css";

export const Button = ({
  hasLeftIcon = true,
  hasText = true,
  text = "Button",
  property1,
  propertyPrimaryClassName,
  icon = <Rocketlaunch className="rocket-launch" color="white" />,
  href,
}) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <button className={`button ${property1} ${propertyPrimaryClassName}`}>
        {hasLeftIcon && <>{icon}</>}

        {hasText && <div className="text-wrapper-4">{text}</div>}
      </button>
    </a>
  );
};

Button.propTypes = {
  hasLeftIcon: PropTypes.bool,
  hasText: PropTypes.bool,
  text: PropTypes.string,
  property1: PropTypes.oneOf([
    "primary-filled",
    "secondary-outlined",
    "primary-outlined",
    "tertiary-filled",
    "tertiary-outlined",
    "secondary-filled",
  ]),
  href: PropTypes.string,
};
