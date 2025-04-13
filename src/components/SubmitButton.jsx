// Code SubmitButton Component Here
import React from "react";

function SubmitButton() {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

function SubmitButton (){
    return(
        <></>
    )
}

export default SubmitButton;