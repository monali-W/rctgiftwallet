import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Menubar extends Component {
  render() {
    return (
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Home</NavbarBrand>
        </div>
      </Navbar>
    );
  }
}
export default Menubar;
