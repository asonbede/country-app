//What this program does.
//1 Enables users to search countries
//2 Displays the search result if it  is less than 10 countries
//3 if the search result is greater than 10, the user is prompted to narrow down the search
//4 enables the user to view details of a particular country
//5 if the search result is equal to one, details of the country is shown right away
//details that can be viewed about a country include the following
//name, capital,population,languages,weather of the capital city
import React, { useState } from "react";
//import countriesServices from "./services/countries";
import Greaterthanten from "./components/Greater-than-ten";
import Between1and10 from "./components/Between1and10";
import Button from "./components/Button";
import Showcountrydetails from "./components/Showcountrydetails";
import SearchForm from "./components/SearchForm";
import { useField, useResource } from "./hooks"; //useResource

const App = () => {
  const [oneCountry, setOneCountry] = useState(null);
  const [buttonLabel, setButtonLabel] = useState("show");
  //const [countryName, setCountryName] = useState("");
  const [clickValue, setclickValue] = useState("");
  //call only once after the first render,
  //fetch data(initial state of the application=all countries) from server
  const countries = useResource("https://restcountries.eu/rest/v2/all");

  console.log("render", countries.length, "countries");

  //Uses the value from the input field to get countries that begin with that input
  const searchCountry = (inputValue) => {
    let searchResult;
    if (inputValue === "") {
      searchResult = [];
    } else {
      searchResult = countries.filter((country) =>
        country.name.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    }
    return searchResult;
  };

  //call each time user types on the input box,
  //get the user input,then use the user input to filter the countries
  const content = useField("text", searchCountry);

  //handle a particular country
  const showCountryHandlers = (e, name) => {
    //setclickValue(  e.target.value)
    // setCountryName(name.name)
    if (oneCountry) {
      if (e.target.value === oneCountry.name) {
        setOneCountry(null);
        setclickValue("show");
        //setButtonLabel(`show`);
        // e.target.text = "show";
        return;
      } else {
        return;
      }
    } else {
      setOneCountry(name);
      //e.target.label = "hide";
      setclickValue(e.target.value);
      //setButtonLabel(`hide`);
    }

    // setTimeout(() => {
    //   setOneCountry(null);
    // }, 20000);
  };

  //get the length of the searched out countries
  const countriesLen = content.filterresult.length;
  console.log(countriesLen, "tyyyyuuuiiiiii");

  if (countriesLen > 10) {
    return (
      <div>
        <SearchForm content={content} />
        <Greaterthanten />
      </div>
    );
  } else if (countriesLen > 1 && countriesLen <= 10) {
    return (
      <>
        <SearchForm content={content} />
        <Showcountrydetails country={oneCountry} />
        {content.filterresult.map((country, index) => (
          <div key={index}>
            {" "}
            <Between1and10 country={country} />
            <Button
              showCountryHandlers={(e) => showCountryHandlers(e, country)}
              country={country}
              buttonLabel={country.name !== clickValue ? "show" : "hide"}
            />{" "}
          </div>
        ))}
      </>
    );
  } else if (countriesLen === 1) {
    return (
      <>
        <SearchForm content={content} />
        <Showcountrydetails country={content.filterresult[0]} />
      </>
    );
  } else {
    return (
      <>
        <SearchForm content={content} />
      </>
    );
  }
};

export default App;
