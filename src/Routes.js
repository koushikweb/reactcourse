import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./componets/Dashboard";
import About from "./componets/About";
import Contact from "./componets/Contact";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
};

export default Routers;
