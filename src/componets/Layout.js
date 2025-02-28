import React from "react";
import Header from "./Header";
import Mainmenu from "../Mainmenu";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Mainmenu />
        </div>
      </div>
    </div>
  );
};
export default Layout;
