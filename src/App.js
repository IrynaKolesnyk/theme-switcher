import React, { useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import themes from "./themes";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const changeTheme = () => {
    theme.title === "dark" ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
