import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/styles.scss";
import App from "./App.jsx";
import CategoryContextProvider from "./context/CategoryContext.jsx";
import CourseContextProvider from "./context/CourseContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </CategoryContextProvider>
  </StrictMode>
);
