/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Tabs } from "../Tabs";
import "./style.css";

export const TabBar = ({ screen, className }) => {
  return (
    <div className={`tab-bar screen-2-${screen} ${className}`}>
      <Tabs
        className={`${screen === "tablet" ? "class-5" : screen === "mobile" ? "class-6" : "class-7"}`}
        property1="tab-1"
        tabDivClassName={`${["mobile", "tablet"].includes(screen) && "class"}`}
        tabDivClassName1={`${screen === "tablet" && "class"} ${screen === "mobile" && "class-2"}`}
        tabDivClassName2={`${screen === "tablet" && "class"} ${screen === "mobile" && "class-3"}`}
        tabDivClassNameOverride={`${screen === "tablet" && "class"} ${screen === "mobile" && "class-4"}`}
        tabStateHoverClassName="tabs-instance"
        tabStateHoverClassNameOverride="tabs-instance"
        tabStateInactiveClassName="tabs-instance"
        tabStateInactiveClassNameOverride="tabs-instance"
        tabText={screen === "mobile" ? "1d" : "Today"}
        tabText1={screen === "mobile" ? "7d" : "This Week"}
        tabText2={screen === "mobile" ? "30d" : "This Month"}
      />
    </div>
  );
};

TabBar.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
