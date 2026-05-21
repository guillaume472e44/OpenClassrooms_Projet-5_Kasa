import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Housing from "./pages/Housing/Housing.jsx";
import About from "./pages/About/About.jsx";
import Error from "./pages/Error/Error.jsx";
import "./sass/global.scss"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
