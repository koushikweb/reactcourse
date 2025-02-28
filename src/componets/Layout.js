import React from "react";
import Header from "./Header";
import Mainmenu from "../Mainmenu";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <div>
          <Container>
            <Header />
            <Mainmenu />
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Layout;
