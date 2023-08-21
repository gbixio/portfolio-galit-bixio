import { useState } from "react";
import BurguerButton from "../../../atoms/burger/Burger";
import { Nav1Style, BgDiv, Menu } from "./Nav1Style";
import { TopNav } from "../../../molecules/index";
import { Link } from "react-router-dom";

function Nav1() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeNav = () => {
    setClicked(false);
  };

  return (
    <>
      <TopNav />
      <Nav1Style>
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
      </Nav1Style>
    </>
  );
}

export default Nav1;
