import { useState, useEffect } from "react";
//import axios from "axios";
import countryServices from "../services/countries";

export const useField = (type, filterFunc) => {
  const [value, setValue] = useState("");
  const filterresult = filterFunc(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
    filterresult,
  };
};

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  console.log("insideusecountry");

  useEffect(() => {
    console.log("effect");

    countryServices
      .getAll(baseUrl)
      .then((initialResoures) => {
        console.log("promise fulfilled");
        setResources(initialResoures);
      })
      .catch((errr) => {
        console.log("server is down, please refresh the browser and try again");
        //setCountry([]);
      });
  }, [baseUrl]);

  return resources;
};
