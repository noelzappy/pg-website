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
import firebase from "firebase";

import { useEffect, useState } from "react";

function Team() {
  const database = firebase.database();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    database.ref("staffs").on("value", (snapshot) => {
      if (snapshot.exists()) {
        const staffs = snapshot.val();
        const temArr = [];
        Object.values(staffs).forEach((staff) => {
          temArr.push(staff);
        });
        setMembers(temArr);
      }
    });
  }, []);

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
          {members.map((member) => (
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={member.imageURL}
                  name={member.fullName}
                  position={{ color: "success", label: member.role }}
                  description={member.roleDescription}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
