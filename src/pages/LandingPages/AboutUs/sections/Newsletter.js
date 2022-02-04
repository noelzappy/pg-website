/* eslint-disable react/jsx-no-duplicate-props */
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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import firebase from "firebase";
import MKButton from "components/MKButton";
import { object, string } from "yup";

// Images
import microScopeStaring from "assets/images/3.jpg";
import { useState } from "react";

const schema = object({
  email: string().email(),
});

function Newsletter() {
  const database = firebase.database();
  const [email, setEmail] = useState("");
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Be the first to see the news</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Get notified first of offers and events and general news from our centre
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput
                  type="email"
                  label="Email Here..."
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <MKButton
                  variant="gradient"
                  color="success"
                  sx={{ height: "100%" }}
                  onClick={() => {
                    schema
                      .validate({ email })
                      .then(() => database.ref("newsletterSubscribers").push(email))
                      .then(() => window.location.reload())
                      .catch((e) => console.log(e));
                  }}
                >
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                borderRadius="xl"
                src={microScopeStaring}
                alt="Doctor Video Call"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
