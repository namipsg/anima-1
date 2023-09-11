/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Tab } from "../Tab";
import "./style.css";

export const Tabs = ({
  property1,
  className,
  tabStateInactiveClassName,
  tabDivClassName,
  tabText = "Today",
  tabStateInactiveClassNameOverride,
  tabDivClassNameOverride,
  tabText1 = "This Week",
  tabStateHoverClassName,
  tabDivClassName1,
  tabText2 = "This Month",
  tabStateHoverClassNameOverride,
  tabDivClassName2,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "tab-1",
  });

  return (
    <div className={`tabs ${className}`}>
      <Tab
        className={tabStateInactiveClassName}
        divClassName={tabDivClassName}
        hasFrame={false}
        onClick={() => {
          dispatch("click_2652");
        }}
        stateProp={state.property1 === "tab-1" ? "active" : "inactive"}
        text={tabText}
      />
      <Tab
        className={tabStateInactiveClassNameOverride}
        divClassName={tabDivClassNameOverride}
        hasFrame={false}
        onClick={() => {
          dispatch("click");
        }}
        stateProp={state.property1 === "tab-2" ? "active" : "inactive"}
        text={tabText1}
      />
      <Tab
        className={tabStateHoverClassName}
        divClassName={tabDivClassName1}
        hasFrame={false}
        onClick={() => {
          dispatch("click_2645");
        }}
        stateProp={state.property1 === "tab-3" ? "active" : "inactive"}
        text={tabText2}
      />
      <Tab
        className={tabStateHoverClassNameOverride}
        divClassName={tabDivClassName2}
        hasFrame={false}
        onClick={() => {
          dispatch("click_2648");
        }}
        stateProp={state.property1 === "tab-4" ? "active" : "inactive"}
        text="All Time"
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "tab-1") {
    switch (action) {
      case "click":
        return {
          property1: "tab-2",
        };
    }
  }

  if (state.property1 === "tab-3") {
    switch (action) {
      case "click":
        return {
          property1: "tab-1",
        };
    }
  }

  if (state.property1 === "tab-4") {
    switch (action) {
      case "click":
        return {
          property1: "tab-2",
        };
    }
  }

  switch (action) {
    case "click_2645":
      return {
        ...state,
        property1: "tab-3",
      };

    case "click_2648":
      return {
        ...state,
        property1: "tab-4",
      };

    case "click_2652":
      return {
        ...state,
        property1: "tab-1",
      };
  }

  return state;
}

Tabs.propTypes = {
  property1: PropTypes.oneOf(["tab-2", "tab-1", "tab-4", "tab-3"]),
  tabText: PropTypes.string,
  tabText1: PropTypes.string,
  tabText2: PropTypes.string,
};
