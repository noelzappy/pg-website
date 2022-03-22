

import React from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Contact from "pages/LandingPages/Appointment/sections/Contact";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
// import bgImage from "assets/images/diagnosting.jpg";

function Appointment() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" zIndex={2}>
        <DefaultNavbar routes={routes} white />
      </MKBox>

      <MKBox
        px={1}
        pt={5}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={1}
        mt={7}
      >
        <Contact />
      </MKBox>
    </>
  );
}

export default Appointment;
