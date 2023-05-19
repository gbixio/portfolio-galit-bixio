import { Outlet } from "react-router-dom";
import { NavBar } from "../../organism/index";
import { ThemeProvider } from 'styled-components';
import useThemeSwitcher from "../../../hooks/UseTheme";


const Layout = () =>{
  const { currentTheme } = useThemeSwitcher();

  return (
    <>
      <ThemeProvider theme={currentTheme}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      </ThemeProvider>
    </>
  )
}

export default Layout;
