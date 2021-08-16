import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../App";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log("~ changeTheme", changeTheme);
  console.log(theme);

  return (
    <>
      <Switch
        onChange={changeTheme}
        checked={theme.title === "light" ? true : false}
        onColor={theme.colors.edit}
        offColor={theme.colors.attention}
        // height={30}
        // width={70} смена размеров для свиtчера
      />
    </>
  );
};

export default ThemeSwitcher;
