import { Outlet } from "react-router-dom";
// import { NavBar } from "../../organism/index";
import { ThemeProvider } from "styled-components";
import useThemeSwitcher from "../../../hooks/UseTheme";
import Nav1 from "../../organism/navBar/navprueba/Nav1";

const Layout = () => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {/* <NavBar /> */}
        <Nav1/>
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
