import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = `https://google-search3.p.rapidapi.com/api/v1`;

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /videos /news /images /search
  const getResult = async (urlType) => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}${urlType}`, {
      methods: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "cd094a5e6amsh183b76c07a883ccp14457cjsn6ffccdaa7d2b",
      },
    });
    const data = await res.json();
    console.log(urlType, data);

    if (urlType.includes("/news")) {
      setResults(data.entries);
    } else if (urlType.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    // setResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{
        getResult,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
