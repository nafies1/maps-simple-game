import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";

const Panel = ({ text }) => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody><h5>{text}</h5></MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Panel;
