import React, { useState, useEffect } from "react";
import { getKategories } from "../api/kategories.api";

export const KategoriesContext = React.createContext({});

export const KategoriesContextProvider = (props) => {
  const { children } = props;
  const [kategories, setKategories] = useState([]);

  const getKategoriesFromServer = async () => {
    try {
      const { data } = await getKategories();
      setKategories(data);
    } catch (error) {
      console.error("anable to get kategories", error);
    }
  };
  useEffect(() => {
    getKategoriesFromServer();
  }, []);

  const contextValue = {
    kategories,
  };

  return (
    <KategoriesContext.Provider value={contextValue}>
      {children}
    </KategoriesContext.Provider>
  );
};
