import { useState } from "react";
import lightTheme from "../styles/theme/LightTheme";
import nightTheme from "../styles/theme/NightTheme";

const useThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? nightTheme : lightTheme
    );
  };

  return { currentTheme, toggleTheme };
};

export default useThemeSwitcher;