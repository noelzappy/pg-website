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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Staff
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              The amazing team, who puts it all together to have your health attended to
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Dr Afua Amoa"
                position={{ color: "info", label: "CEO" }}
                description="The one who made this whole dream a reality. A dedicated individual with outstanding qualification in health care."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Bettina Boateng"
                position={{ color: "info", label: "Sonographer and Head of Operation" }}
                description="Some dummy description about Boateng that we can work on changing later to fit his role/duties, qualification or any other information you wish to include."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Christabel Yeboah"
                position={{ color: "info", label: "Sonographer" }}
                description="Some dummy description about Yeboah that we can work on changing later to fit his role/duties, qualification or any other information you wish to include."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Vincent Osei Asibey"
                position={{ color: "info", label: "Sonographer" }}
                description="Some dummy description about Asibey that we can work on changing later to fit his role/duties, qualification or any other information you wish to include."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Stella Osae"
                position={{ color: "info", label: "Administrator" }}
                description="Some dummy description about Stella Osae that we can work on changing later to fit his role/duties, qualification or any other information you wish to include."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
