import React from "react";
import { useState } from "react";
const usePersistedTheme = () => {
  const getTheme = () => {
    const storageTheme = JSON.parse(localStorage.gatItem("theme"));
    return storageTheme || "light";
  };
  const [theme, settheme] = useState();
  return <h1>ghjg</h1>;
};

export default usePersistedTheme;
