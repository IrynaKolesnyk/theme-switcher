import React, { useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import themes from "./themes";
import usePersistedTheme from "./hooks/usePersistedTheme";

export const ThemeContext = createContext();

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

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
