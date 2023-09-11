/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Envelopesimple } from "../../icons/Envelopesimple";
import { Button } from "../Button";
import "./style.css";

export const SubscribeForm = ({ email = "Enter your email here", property1, buttonHasLeftIcon }) => {
  return (
    <div className="subscribe-form">
      <input className="input" />
      <Button
        hasLeftIcon={buttonHasLeftIcon}
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
        icon={<Envelopesimple className="envelopesimple-15" color="white" />}
        property1="secondary-filled"
        propertyPrimaryClassName="button-3"
        text="Subscribe"
      />
    </div>
  );
};

SubscribeForm.propTypes = {
  email: PropTypes.string,
  property1: PropTypes.oneOf(["default"]),
  buttonHasLeftIcon: PropTypes.bool,
};
