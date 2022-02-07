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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Alert from "@mui/material/Alert";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { number, object, string } from "yup";
// Image
import bgImage from "assets/images/1.jpg";
import { useState } from "react";
import firebase from "firebase";

function ContactUs() {
  const database = firebase.database();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const contactSchema = object({
    name: string().required("Please enter your full name"),
    email: string("Please provide a valid email address")
      .email("Please provide a valid email address")
      .required("Please provide a valid email address"),
    message: string("Please pprovide the reason of contacting us").required(
      "Please pprovide the reason of contacting us"
    ),
    phoneNumber: number().required("Please providße your phone number"),
  });

  const onSubmitForm = () => {
    contactSchema
      .validate({
        name,
        email,
        message,
        phoneNumber,
      })
      .then(() => {
        setErrorMessage(null);
        database
          .ref("feedbacks")
          .push({
            name,
            email,
            message,
            phoneNumber,
          })
          .then(() => {
            setSuccessMessage("Message sent Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((error) => setErrorMessage(error.message));
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/appointment",
            label: "book appointment",
            color: "success",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="success"
              coloredShadow="success"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including enquiries, appointment, please contact us using the
                form below.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your query in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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

                {successMessage !== null && (
                  <Grid item xs={12} mb={3}>
                    <Alert
                      onClose={() => {
                        setSuccessMessage(null);
                      }}
                      severity="success"
                    >
                      {successMessage}
                    </Alert>
                  </Grid>
                )}
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton variant="gradient" color="success" onClick={onSubmitForm}>
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
