import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  render() {
    return (
      <Router>
        <MDBNavbar color='blue' style={{ marginBottom: "20px", marginTop: "10px" }} dark>
          <MDBNavbarBrand href='#'>
            <h5>Found City Game</h5>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
