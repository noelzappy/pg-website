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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/doctor-standing.jpg";
import bgBack from "assets/images/watching-microscope.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Our
                    <br />
                    Services
                  </>
                }
                description="We provide optimum diagnostic and health care services like x-ray, ultrasound and mammogram by radiologists to diagnose and treat disease"
              />
              <RotatingCardBack
                image={bgBack}
                title="Want More?"
                description="We are on a mission to provide our clients with personalized, high–quality care"
                action={{
                  type: "internal",
                  route: "/services",
                  label: "view all services",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="U"
                  title="Ultrasound services"
                  description=" A safe technique that uses sound waves to bring out pictures of the internal organs in the body and helps in diagnosing pathologies"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="X"
                  title="X-ray services"
                  description="X-ray services for getting images of the skeletal system and its able to show pathologies like
fractures,foreign bodies, etc for diagnosing
infections and medical examinations."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="F"
                  title="Flouroscopy services"
                  description="similar to x-rays but usually a contrast media such as barium sulphate or omnipaque is used to outline the walls of the particular organ that needs to be examined."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="MM"
                  title="Mammogram services"
                  description="We use a state-of -the-art GE mammogram machine to detect breast disease and cancers."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
