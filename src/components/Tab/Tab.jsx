/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Tab = ({
  number = "302",
  text = "Created",
  stateProp,
  className,
  divClassName,
  hasFrame = true,
  onClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "inactive",
  });

  return (
    <div
      className={`tab ${state.state} ${className}`}
      onClick={onClick}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`created ${divClassName}`}>{text}</div>
      {hasFrame && (
        <div className="frame">
          <div className="element">{number}</div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "inactive") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "inactive",
        };

      case "click":
        return {
          state: "active",
        };
    }
  }

  return state;
}

Tab.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string,
  stateProp: PropTypes.oneOf(["inactive", "active", "hover"]),
  hasFrame: PropTypes.bool,
};
