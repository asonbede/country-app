import { useState, useEffect } from "react";
//import axios from "axios";
import countryServices from "../services/countries";

export const useField = (type, filterFunc, reset, setcountry) => {
  const [value, setValue] = useState("");
  const filterresult = filterFunc(value);
  console.log({ filterresult });

  const onChange = (event) => {
    //console.log("length", filterresult.length);
    setValue(event.target.value);
    reset();

    if (filterresult.length === 1) {
      setcountry(filterresult[0]);
    }
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
