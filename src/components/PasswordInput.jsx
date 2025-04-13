// Code PasswordInput Component Here
import React from "react";

function PasswordInput() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      placeholder="Enter your password"
      onChange={handleChange}
    />
  );
}

function PasswordInput (){
    return(
        <></>
    )
}

export default PasswordInput;