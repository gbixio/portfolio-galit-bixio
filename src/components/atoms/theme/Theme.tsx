import { ThemeStyle } from "./ThemeStyle"
import moon  from "../../../assets/themeIcons/moon.svg"
import sun  from "../../../assets/themeIcons/sun.svg"
import useThemeSwitcher from "../../../hooks/UseTheme";
import lightTheme from "../../../styles/theme/LightTheme";


const ThemeSwitcher: React.FC = () => {
  const { currentTheme, toggleTheme } = useThemeSwitcher();

  return (
    <>
    <ThemeStyle  onClick={toggleTheme}>
      {currentTheme === lightTheme ? 'Dark mode' : 'Light mode'}
      {currentTheme === lightTheme ? <img  src={moon} alt="night theme" /> : <img  src={sun} alt="night theme" />} 
    </ThemeStyle>
   
    </>
    )
}

export default ThemeSwitcher

