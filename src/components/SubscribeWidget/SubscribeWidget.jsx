/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Envelopesimple } from "../../icons/Envelopesimple";
import { Button } from "../Button";
import "./style.css";

export const SubscribeWidget = ({
  className,
  buttonIcon = <Envelopesimple className="envelope-simple" color="white" />,
}) => {
  return (
    <div className={`subscribe-widget ${className}`}>
      <div className="type-form">
        <input className="enter-your-email" />
      </div>
      <Button
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
        icon={buttonIcon}
        property1="tertiary-filled"
        propertyPrimaryClassName="button-2"
        text="Subscribe"
      />
    </div>
  );
};
