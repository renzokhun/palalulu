import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

import Header from "./components/Header";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/my-website/" element={<Home />} />
          <Route path="/my-website/about" element={<About />} />
          <Route path="/my-website/projects" element={<Projects />} />
          <Route path="/my-website/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default RouteSwitch;