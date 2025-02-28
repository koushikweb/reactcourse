import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./componets/Dashboard";
import About from "./componets/About";
import Contact from "./componets/Contact";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routers;
