import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const Header = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
          VERSUS
        </h1>
        <div className="flex gap-8">
          <i
            onClick={() =>
              setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className={`bi ${
              currentTheme === "light" ? "bi-brightness-high" : "bi-moon"
            } text-2xl cursor-pointer text-gray-700 dark:text-yellow-300 hover:text-yellow-500 transition-colors`}
          ></i>
          <i className="bi bi-person-circle text-2xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
