import { ThemeStyle } from "./ThemeStyle"
import moon  from "../../../assets/themeIcons/moon.svg"

function ThemeSwitch() {
  return (
    <ThemeStyle className="container-switch">
        <img id="tgg-icon" src={moon} alt="night theme" />
        <p id="tgg-text" className="toggle-theme__text">Dark mode</p>
    </ThemeStyle>
    )
}

export default ThemeSwitch