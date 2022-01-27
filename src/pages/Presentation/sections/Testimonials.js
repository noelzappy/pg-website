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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            9,477+ Ghanaians Lives
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Over Nine thousands Ghanaians trust their health with our care. Here are are what some
            say..
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Joseph Asamoh"
              date="1 day ago"
              review="An excellent treatments. We have to fill this in later"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Emmanuel Yeboah"
              date="3 months ago"
              review="I found solution to all my healthcare needs from Precious Gem Diagnostic Centre. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Gbadago"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
