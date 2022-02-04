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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import firebase from "firebase";

// Routes
import routes from "routes";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import ScrollToTop from "react-scroll-to-top";

// Images
import bgImage from "assets/images/x-ray-room-correct.jpeg";
import { useState, useEffect } from "react";

function Gallery() {
  const database = firebase.database();
  const [imgURL, setImgURL] = useState(null);
  const [localImages, setLocalImages] = useState([
    {
      img: "https://i.ibb.co/smLGPhy/x-ray-work-station.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/6y4SJwQ/x-ray-viewint-room.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/Xtykg53/x-ray-room-correct-1.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/bPDxnzm/x-ray-reception.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/7JQ6MSp/x-ray-room.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/YkdmNKM/ultrasound-room.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/QmsFy5X/nsawam-prison-donation-3.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/2ghDQ79/donation-to-nsawam-prison.jpg",
      title: "Precus Gem Image",
    },
    {
      img: "https://i.ibb.co/Sr0gwKL/donation-to-nsawam-prison-2.jpg",
      title: "Precious Gem",
    },
    {
      img: "https://i.ibb.co/yQddCSm/ultrasound-room-5.jpg",
      title: "Precious Gem",
    },
  ]);

  useEffect(() => {
    database.ref("galleryImages").on("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const tempArr = [];
        Object.values(data).forEach((img) => {
          tempArr.push(img);
        });
        setLocalImages(tempArr);
      }
    });
  }, []);

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
              <Grid container item xs={12} lg={6}>
                <MKTypography variant="h3" mb={6}>
                  Our Galllery of Images
                </MKTypography>
              </Grid>
              <ImageList cols={2} variant="masonry">
                {localImages.map((item) => (
                  <ImageListItem
                    key={item.img}
                    onClick={() => {
                      setImgURL(item.img);
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Container>
          </MKBox>
          {imgURL !== null && <Lightbox mainSrc={imgURL} onCloseRequest={() => setImgURL(null)} />}
        </Card>
        <ScrollToTop smooth />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Gallery;
