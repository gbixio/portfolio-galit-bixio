import { AiOutlineMenu } from "react-icons/ai";
import useHamburger from "../../../hooks/useHamburger";
import { TopNav } from "../../molecules";
import { NavStyle } from "./NavStyle";
import { Menu } from "../../atoms";

function NavBar() {
  const [isOpen, hamburgerMenu] = useHamburger(false);
  return (
    <>
      <TopNav />
      <NavStyle>
        <AiOutlineMenu onClick={hamburgerMenu} />
        {isOpen ||<Menu/>}
        
      </NavStyle>
    </>
  );
}

export default NavBar;
