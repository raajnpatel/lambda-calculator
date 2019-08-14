import React from "react";

const NumberButton = (props) => {
  return (
    <button className = {props.text === "0" ? "button zero" : "button"}
            onClick = {() => {console.log("number button", props.text)}}>
      {props.text}

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default  NumberButton;
