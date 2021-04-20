import React from "react";

const WeatherShow = ({ weatherValue, country }) => {
  return (
    <>
      Weather in {country.capital} <br />
      Temperature: {weatherValue.main.temp} degree celcius <br />
      Minimum Temperature: {weatherValue.main.temp_min} degree celcius <br />
      Miximum Temperature: {weatherValue.main.temp_max} degree celcius
      <br />
      Weather Description: {weatherValue.weather[0].description}
      <br />
      <img
        src={`http://openweathermap.org/img/w/${weatherValue.weather[0].icon}.png`}
        height="100"
        alt={`icon of ${country.capital} weather`}
      />
      <br />
      Humidity: {weatherValue.main.humidity} %
      <br />
      Wind Speed: {weatherValue.wind.speed} m/s <br />
      Wind direction: {weatherValue.wind.deg} deg
    </>
  );
};
export default WeatherShow;
