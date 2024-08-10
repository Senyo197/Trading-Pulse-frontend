import React, { createContext, useContext, useCallback } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = React.useState({
    startDate: "",
    endDate: "",
  });

  const handleSearch = useCallback((startDate, endDate) => {
    // Update searchParams and perform search if necessary
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
