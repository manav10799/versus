import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import ThemeContext from "./utils/ThemeContext";
import Container from "./pages/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductGrid from "./pages/ProductGrid";
import { Provider } from "react-redux";
import Store from "./store/AppStore";
import CompareView from "./pages/CompareView";

function App() {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
  }, [currentTheme]);
  return (
    <div>
      <Provider store={Store}>
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <Header />
          <RouterProvider router={browserRoute}></RouterProvider>
        </ThemeContext.Provider>
      </Provider>
    </div>
  );
}

const browserRoute = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
  {
    path: "/category/:categoryId",
    children: [
      {
        index: true,
        element: <ProductGrid />,
      },
      {
        path: "compare",
        element: <CompareView />,
      },
    ],
  },
]);

export default App;
