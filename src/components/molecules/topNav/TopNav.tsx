import { ThemeSwitch, Social } from "../../atoms/index"
import { TopNavStyle } from "./TopNavStyle"

function TopNav() {
  return (
    <TopNavStyle>
            <Social/>
            <ThemeSwitch/>
    </TopNavStyle>
  )
}

export default TopNav