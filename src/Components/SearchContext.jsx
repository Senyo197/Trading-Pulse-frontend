import React, { createContext, useContext, useState, useCallback } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    startDate: "",
    endDate: "",
  });

  const handleSearch = useCallback((startDate, endDate) => {
    console.log("Searching with:", startDate, endDate);
    setSearchParams({ startDate, endDate });
  }, []);

  return (
    <SearchContext.Provider value={{ searchParams, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
