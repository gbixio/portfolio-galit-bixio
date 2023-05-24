import Menu from "../../atoms/menu/Menu";
import { TopNav } from "../../molecules";
import { NavBarStyle } from "./NavBarStyle";

function NavBar() {
  return (
    <>
      <NavBarStyle>
        <TopNav />
        <Menu />
      </NavBarStyle>
    </>
  );
}

export default NavBar;
