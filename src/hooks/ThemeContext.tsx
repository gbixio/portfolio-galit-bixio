// import React, { createContext, useContext, useState } from "react";

// interface ThemeContextProps {
//   currentTheme: string;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps>({
//   currentTheme: "light",
//   toggleTheme: () => {},
// });

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [currentTheme, setCurrentTheme] = useState("light");

//   const toggleTheme = () => {
//     setCurrentTheme((prevTheme) =>
//       prevTheme === "light" ? "dark" : "light"
//     );
//   };

//   const themeContextValue: ThemeContextProps = {
//     currentTheme,
//     toggleTheme,
//   };

//   return (
//     <ThemeContext.Provider value={themeContextValue}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeSwitcher = () => useContext(ThemeContext);