/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { object, string, number } from "yup";

// Images
import bgImage from "assets/images/1.jpg";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [service, setService] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const appointmentSchema = object({
    fullName: string().required("Please enter your full name"),
    phoneNumber: number("Please your phoe numbr is required")
      .positive("Please your phoe numbr is required")
      .integer("Please your phoe numbr is required")
      .min(10, "Please your phoe numbr is required")
      .required("Please your phoe numbr is required"),
    userEmail: string("Please provide a valid email address")
      .email("Please provide a valid email address")
      .required("Please provide a valid email address"),
    service: string("Please select at least one service").required(
      "Please select at least one service"
    ),
    description: string("Please describe the reason for your appointment in brief").required(
      "Please describe the reason for your appointment in brief"
    ),
  });

  const onSubmitForm = () => {
    appointmentSchema
      .validate({
        fullName,
        phoneNumber,
        userEmail,
        service,
        description,
      })
      .then((res) => {
        setErrorMessage(null);
        console.log(res);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const serviceList = [
    "Ultrasound services",
    "X-ray services",
    "Flouroscopy services",
    "Mammogram services",
    "X-Ray comment",
    "CT scan and MRI reporting",
    "ECG services",
    "Herbal medicine clinic",
    "Medical examination services",
    "Health counselling services",
    "Cinical chemistry services",
  ];
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Book Appoitment
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+233) 542 778 775
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        info@preciousgem.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Address of Precious Gem
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>

                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Details
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Please enter Appointment details below
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="My email is"
                          placeholder="Email Address"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="My phone number is"
                          placeholder="Phone Number"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          type="number"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <FormControl
                          fullWidth
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                        >
                          <InputLabel id="service">Choose a service</InputLabel>
                          <Select
                            labelId="service"
                            id="simple-select"
                            value={service}
                            label="Service Type"
                            onChange={(e) => setService(e.target.value)}
                          >
                            {serviceList.map((item) => (
                              <MenuItem value={item}>{item}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Reason for appointment"
                          placeholder="I want to book appointment about..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    {errorMessage !== null && (
                      <Grid item xs={12} mb={3}>
                        <Alert
                          onClose={() => {
                            setErrorMessage(null);
                          }}
                          severity="error"
                        >
                          {errorMessage}
                        </Alert>
                      </Grid>
                    )}
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="success" onClick={onSubmitForm}>
                        Submit Details
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
