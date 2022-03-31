import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/Navbar/MainNav";
import MyRoutes from "./components/Routes/Routes";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import styles from "./App.module.css";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#071637" : "#eee"};
  color: ${(props) => (props.theme.mode === "dark" ? "#eee" : "#000")};
}
`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

const App = () => {
  const [darkTheme, setDarkTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyle />
        <MainNav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <main className={`${styles.mainContainer} h-100`}>
          <MyRoutes />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
