import { createContext } from "react";

const ThemeContext = createContext(
  localStorage.getItem("data-theme")
    ? localStorage.getItem("data-theme")
    : "light"
);

export default ThemeContext;
