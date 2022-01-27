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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-header-home.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
        action={{
          type: "internal",
          route: "/appointment",
          label: "book appointment",
          color: "info",
        }}
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Precious Gem Diagnostic Centre{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Providing personalized, high – quality health care to our clients. We exceed
              expectations through our commitment to continuous quality improvement of healthcare.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />

        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="M"
                title="Our Mission"
                description="To provide our clients with personalized, high–quality care ,We are dedicated to
improving and maintaining your Health through advanced diagnostic medicine . To achieve an
unequaled level of measurable quality and productivity in the delivery of health services that are
responsive to then needs and values of patients ,physicians ,employers and employees."
                action={{
                  type: "internal",
                  route: "/about-us",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                color="info"
                icon="V"
                title="Our Vision"
                description="To be the first choice in healthcare for our communities by exceeding expectations through our commitment to continuous quality improvement of healthcare. To be the partner of choice for physicians by ensuring a safe environment to practice safe and
quality healthcare. To be a leader in providing quality, compassionate patient -centered care that seeks physical cures and comforts as well as peace of mind and peace of heart"
                action={{
                  type: "internal",
                  route: "/about-us",
                  label: "Learn More",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Stay up to date with our updates
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Follow us across our social media platforms.
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/noelzappy"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Twitter
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/noelzappy"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Facebook
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://youtube.com/noelzappy"
                  target="_blank"
                  color="youtube"
                >
                  <i className="fab fa-youtube" />
                  &nbsp;YouTube
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
