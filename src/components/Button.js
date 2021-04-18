import React from "react";
const Button = ({ showCountryHandlers, country, buttonLabel }) => {
  //const buttonLabel = country ? "hide" : "show";
  //const sliceLabel= buttonLabel.slice(5)

  return (
    <button onClick={showCountryHandlers} value={country.name}>
      {buttonLabel}
    </button>
  );
};
export default Button;
