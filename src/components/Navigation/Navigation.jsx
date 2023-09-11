/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BurgerMenu } from "../../icons/BurgerMenu";
import { Storefront10 } from "../../icons/Storefront10";
import { User } from "../../icons/User";
import { Button } from "../Button";
import "./style.css";

export const Navigation = ({ property1, className, buttonIcon = <User className="user-7" color="white" /> }) => {
  return (
    <div className={`navigation ${property1} ${className}`}>
      <div className="nav-logo">
        <div className="div">
          {["navigation-mobile", "navigation-tablet"].includes(property1) && (
            <div className="logo">
              <Storefront10 className="storefront" color="#A259FF" />
              <img
                className="NFT-marketplace"
                alt="Nft marketplace"
                src={
                  property1 === "navigation-tablet"
                    ? "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace-6.svg"
                    : "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace.svg"
                }
              />
            </div>
          )}

          {property1 === "navigation-desktop" && (
            <>
              <Storefront10 className="storefront-10" color="#A259FF" />
              <img
                className="img"
                alt="Nft marketplace"
                src="https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace-1.svg"
              />
            </>
          )}
        </div>
      </div>
      <div className="nav-nav-menu">
        {["navigation-mobile", "navigation-tablet"].includes(property1) && <BurgerMenu className="burger-menu" />}

        {property1 === "navigation-desktop" && (
          <>
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              propertyPrimaryClassName="button-instance"
              text="Marketplace"
            />
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              propertyPrimaryClassName="button-instance"
              text="Rankings"
            />
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              propertyPrimaryClassName="button-instance"
              text="Connect a wallet"
            />
            <Button icon={buttonIcon} property1="secondary-filled" propertyPrimaryClassName="sign-up" text="Sign Up" />
          </>
        )}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  property1: PropTypes.oneOf(["navigation-tablet", "navigation-desktop", "navigation-mobile"]),
};
