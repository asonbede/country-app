import React from "react";
import WeatherShow from "./WeatherShow";
const Showcountrydetails = ({ country, weatherValue }) => {
  // const selectedCountry = countries.filter((item) => item.name === country);
  console.log({ weatherValue });
  if (country === null) {
    return null;
  }
  return (
    <>
      <p>Name: {country.name}</p>
      <p>
        {" "}
        Capital: {country.capital}
        <br />
        Population: {country.population}
        <br />
        Region: {country.region} <br />
        Sub-Region: {country.subregion}
      </p>
      <ul>
        Languages :
        {country.languages.map((language, index) => (
          <li key={index}>{language.name} </li>
        ))}{" "}
      </ul>
      <p>
        Flag:
        <br />{" "}
        <img src={country.flag} height="100" alt={`flag of ${country.name}`} />
      </p>

      {weatherValue ? (
        <WeatherShow weatherValue={weatherValue} country={country} />
      ) : null}
    </>
  );
};
export default Showcountrydetails;
