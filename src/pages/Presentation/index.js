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
import Carousel from "react-material-ui-carousel";
import ScrollToTop from "react-scroll-to-top";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import firebase from "firebase";
// Images
import bgImage from "assets/images/1.jpg";
import { useState, useEffect } from "react";

function Presentation() {
  const database = firebase.database();

  const [carouselItems, setCarouselItems] = useState([
    {
      name: "Precious Gem Diagnostic Center",
      description:
        "Providing personalized, high–quality health care to our clients. We exceed expectations through our commitment to continuous quality improvement of healthcare.",
      image: bgImage,
    },
  ]);
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");

  useEffect(() => {
    database.ref("slidingBanners").on("value", (snapshot) => {
      const tempArr = [];
      Object.values(snapshot.val()).forEach((item) =>
        tempArr.push({
          name: item.title,
          description: item.description,
          image: item.imageURL,
        })
      );
      setCarouselItems(tempArr);
    });

    database.ref("webContents").on("value", (snapshot) => {
      const data = snapshot.val();
      Object.entries(data).forEach((item) => {
        const [key, value] = item;
        if (key === "mission") {
          setMission(value);
        }
        if (key === "vision") {
          setVision(value);
        }
      });
    });
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
        action={{
          type: "internal",
          route: "/appointment",
          label: "book appointment",
          color: "success",
        }}
      />

      <Carousel>
        {carouselItems.map((item, i) => (
          <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.4),
                  rgba(gradients.dark.state, 0.4)
                )}, url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              placeItems: "center",
              display: "grid",
            }}
            pt={15}
            key={i.toString()}
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
                  textAlign="center"
                >
                  {item.name}
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
                  {item.description}
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
        ))}
      </Carousel>

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
                color="success"
                icon="M"
                title="Our Mission"
                description={mission}
                action={{
                  type: "internal",
                  route: "/about-us",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                color="success"
                icon="V"
                title="Our Vision"
                description={vision}
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
      </Card>
      <ScrollToTop smooth />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
