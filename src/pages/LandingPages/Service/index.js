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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// import MKTypography from "components/MKTypography";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Featuring from "pages/LandingPages/Service/sections/Featuring";
import ScrollToTop from "react-scroll-to-top";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/x-ray-room-correct.jpeg";

function Service() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/appointment",
          label: "book appointment",
          color: "success",
        }}
        dark
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
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
          <MKBox component="section" py={2}>
            <Container>
              {/* <Grid container item xs={12} lg={6}>
                <MKTypography variant="h3" mb={6}>
                  Our Services
                </MKTypography>
              </Grid> */}
              <Featuring />
            </Container>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    variant="gradient"
                    color="success"
                    icon="U"
                    title="Ultrasound services"
                    description="Ultrasound services is a safe technique that uses sound waves to bring out pictures of the
internal organs in the body and helps in diagnosing pathologies
Abdomen and pelvic ultrasound ,Pregnancy or obstetric scan for dating ,fetal anomalies and sex
determination,Prostate scan,Scrotal scan ,breast scan thyroid scan ,orbital or eye scans
,doppler scan of the veins ,arteries and also carotid artery scans."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    color="success"
                    icon="X"
                    title="X-ray services"
                    description="X-ray services for getting images of the skeletal system and its able to show pathologies like
fractures,foreign bodies ,intestinal obstruction,bone tumours,chest x-rays for diagnosing
infections and medical examinations."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    color="success"
                    icon="F"
                    title="Flouroscopy services"
                    description="Similar to x-rays but usually a contrast media such as barium sulphate
or omnipaque is used to outline the walls of the particular organ that needs to be examined to
determine if its normal or not, HSG for women with infertility issues and barium swallows"
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    variant="gradient"
                    color="success"
                    icon="M"
                    title="Mammogram services"
                    description="We use a state-of -the-art GE mammogram machine to detect breast
disease and cancers ,again we provide diagnostic and screening mammography services for
early detection and management of breast disease especially cancers"
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    variant="gradient"
                    color="success"
                    icon="X"
                    title="X-Ray comment"
                    description="We offer specialist radiological comments and second opinions on x-rays of
any body part."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    // variant="gradient"
                    color="success"
                    icon="C"
                    title="CT scan and MRI reporting"
                    description="We offer specialist radiological comments and second opinions on
CT scans and MRI of any body part, all you have to do is to add a CD or your films."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    // variant="gradient"
                    color="success"
                    icon="E"
                    title="ECG services"
                    description="We offer electrocardiogram to analyze the electrical activity of the heart with a
comment by a specialist cardiologist."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    variant="gradient"
                    color="success"
                    icon="H"
                    title="Herbal medicine clinic"
                    description="We have a specialist herbal trained doctor from the Kwame Nkrumah
University of Science and Technology who uses our local herbs to treat and manage patients
especially those with prostate cancers ,diabetes and hypertension."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    // variant="gradient"
                    color="success"
                    icon="C"
                    title="Cinical chemistry services"
                    description="Cinical chemistry services for assessing the internal organs like the kidneys ,liver ,heart and
the pancreas."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <FilledInfoCard
                    variant="gradient"
                    color="success"
                    icon="C"
                    title="Cinical chemistry services"
                    description="For detection of fungal elements ,parasites and other cells associated with
disease, culture of bacteria or fungi on a variety of media and subsequent identification of these
organism are also available."
                    action={{
                      type: "internal",
                      route: "/appointment",
                      label: "Book Appointent",
                    }}
                  />
                </Grid>
              </Grid>

              <Grid xs={12} mt={7}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon="H"
                  title="Heamatology services:"
                  description="A wide range of tests for the diagnosis of blood disorders, screening
for malaria and other parasites ,we also perform hemoglobin electrophoresis and blood
grouping."
                  action={{
                    type: "internal",
                    route: "/appointment",
                    label: "Book Appointent",
                  }}
                />
              </Grid>
            </Container>
          </MKBox>
        </Card>
        <ScrollToTop smooth />

        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Service;
