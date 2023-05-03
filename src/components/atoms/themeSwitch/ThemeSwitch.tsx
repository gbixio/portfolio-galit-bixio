import { ThemeStyle } from "./ThemeStyle"

function ThemeSwitch() {
  return (
    <ThemeStyle id="tgg-theme">
        <img id="tgg-icon" src="media/icons/moon.svg" alt="night theme" />
        <p id="tgg-text" className="toggle-theme__text">Dark mode</p>
    </ThemeStyle>
    )
}

export default ThemeSwitch