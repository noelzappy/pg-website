/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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
      <MKBox top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          // action={{
          //   type: "external",
          //   route: "/appointment",
          //   label: "book appointment",
          //   color: "info",
          // }}
          transparent
          dark
        />
      </MKBox>

      <MKBox px={1} pt={5} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Contact />
      </MKBox>
    </>
  );
}

export default Appointment;
