import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const apiValue = createContext();

function AllData({ children }) {
  const [api, setApi] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    axios
      .get("/assets/js/Api.json")
      .then((response) => {
        setApi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gaming data:", error);
        // Fallback data in case the JSON file can't be loaded
        setApi([]);
      });
  }, []);

  return <apiValue.Provider value={api}>{children}</apiValue.Provider>;
}

export { AllData, apiValue };
