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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/diagnosting.jpg";

function Appointment() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "/appointment",
        //   label: "book appointment",
        //   color: "info",
        // }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Fill the form to Book Appointment
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Service</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Ultrasound" control={<Radio />} label="Ultrasound" />
                    <FormControlLabel value="X-ray" control={<Radio />} label="X-ray" />
                    <FormControlLabel value="Flouroscopy" control={<Radio />} label="Flouroscopy" />
                    <FormControlLabel value="Mammogram" control={<Radio />} label="Mammogram" />

                    <FormControlLabel
                      value="ct-scan-MRI"
                      control={<Radio />}
                      label="CT scan & MRI"
                    />

                    <FormControlLabel
                      value="electrocardiogram"
                      control={<Radio />}
                      label="Electrocardiogram (ECG)"
                    />

                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  <MKBox mb={2} mt={2}>
                    <MKInput
                      // variant="standard"
                      label="Reason for appointment"
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput label="Full Name" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="number" label="Phone Number" fullWidth />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth max={10} />
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      Submit
                    </MKButton>
                  </MKBox>
                </FormControl>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default Appointment;
