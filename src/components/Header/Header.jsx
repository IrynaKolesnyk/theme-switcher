import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import Navigation from "../Navigation/Navigation";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderStyled colors={theme.colors}>
      <ThemeSwitcher />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
