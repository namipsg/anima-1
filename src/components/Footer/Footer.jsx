/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Discordlogo2 } from "../../icons/Discordlogo2";
import { Envelopesimple } from "../../icons/Envelopesimple";
import { Instagramlogo5 } from "../../icons/Instagramlogo5";
import { Storefront10 } from "../../icons/Storefront10";
import { Twitterlogo1 } from "../../icons/Twitterlogo1";
import { Youtubelogo4 } from "../../icons/Youtubelogo4";
import { SubscribeForm } from "../SubscribeForm";
import { SubscribeWidget } from "../SubscribeWidget";
import "./style.css";

export const Footer = ({
  screen,
  className,
  icon = <Twitterlogo1 className="instance-node" color="#858584" />,
  subscribeWidgetButtonIcon = <Envelopesimple className="envelopesimple-3" color="white" />,
  footerInfoClassName,
  NFTMarketplace = "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace-1.svg",
  frameClassName,
  divider = "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/divider-1.svg",
}) => {
  return (
    <div className={`footer screen-20-${screen} ${className}`}>
      <div className={`footer-info ${footerInfoClassName}`}>
        <div className="NFT-marketplace-info">
          <div className="logo-2">
            <Storefront10 className="storefront-1" color="#A259FF" />
            <img className="NFT-marketplace-2" alt="Nft marketplace" src={NFTMarketplace} />
          </div>
          <div className="additional-info-2">
            <p className="text-wrapper-5">NFT marketplace UI created with Anima for Figma.</p>
            <div className="community-info">
              <div className="text-wrapper-6">Join our community</div>
              <div className="icons">
                <Discordlogo2 className="instance-node" color="#858584" />
                <Youtubelogo4 className="instance-node" color="#858584" />
                {icon}
                <Instagramlogo5 className="instance-node" color="#858584" />
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="text-wrapper-7">Explore</div>
          <div className="pages">
            <div className="text-wrapper-8">Marketplace</div>
            <div className="text-wrapper-9">Rankings</div>
            <div className="text-wrapper-9">Connect a wallet</div>
          </div>
        </div>
        <div className="subscribe">
          <div className="join-our-weekly">Join Our Weekly Digest</div>
          <div className="subscribe-form-info">
            {["desktop", "tablet"].includes(screen) && (
              <>
                <p className="get-exclusive">Get exclusive promotions &amp; updates straight to your inbox.</p>
                <SubscribeForm buttonHasLeftIcon={false} property1="default" />
              </>
            )}

            {screen === "mobile" && (
              <>
                <p className="get-exclusive-2">Get exclusive promotions &amp; updates straight to your inbox.</p>
                <SubscribeWidget buttonIcon={subscribeWidgetButtonIcon} className="subscribe-widget-mobile" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`frame-2 ${frameClassName}`}>
        <img
          className="divider"
          alt="Divider"
          src={
            screen === "tablet"
              ? "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/divider-2.svg"
              : screen === "mobile"
              ? "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/divider.svg"
              : divider
          }
        />
        <p className="text-wrapper-10">Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  NFTMarketplace: PropTypes.string,
  divider: PropTypes.string,
};
