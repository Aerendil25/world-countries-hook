import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(16);
  const currentArray = countriesData.slice(
    page * perPage,
    (page + 1) * perPage
  );
  const url = "https://restcountries.com/v3.1/all";
  async function fetchData() {
    try {
      const res = await axios.get(url);
      setCountriesData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const paginate = (index, e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setPage(index);
      setIsLoading(false);
    }, 400);
  };

  return (
    <GlobalContext.Provider
      value={{
        countriesData,
        setCountriesData,
        isLoading,
        setIsLoading,
        page,
        setPage,
        paginate,
        perPage,
        setPerPage,
        currentArray,
        isDark,
        setIsDark
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
