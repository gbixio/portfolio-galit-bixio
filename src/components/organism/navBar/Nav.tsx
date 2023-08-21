import BurguerButton from "../../atoms/burger/Burger";
import { NavStyle, BgDiv, Menu } from "./NavStyle";
import { TopNav } from "../../molecules/index";
import { Link } from "react-router-dom";
import useClickedState from "../../../hooks/useClickedState";
import useNavClose from "../../../hooks/useNavClose";

function Nav() {

  const [clicked, handleClick] = useClickedState(false);
  const closeNav = useNavClose();

  return (
    <>
      <TopNav />
      <NavStyle>
        <Menu className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={closeNav} style={{ textDecoration: "none" }} to="/">
            <a> Home</a>
          </Link>

          <Link
            onClick={closeNav}
            style={{ textDecoration: "none" }}
            to="/about"
          >
            <a>About me</a>
          </Link>
          <Link
            onClick={closeNav}
            style={{ textDecoration: "none" }}
            to="/portfolio"
          >
            <a>Portfolio</a>
          </Link>
          <Link
            onClick={closeNav}
            style={{ textDecoration: "none" }}
            to="/contact"
          >
            <a>Contact</a>
          </Link>
        </Menu>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavStyle>
    </>
  );
}

export default Nav;
