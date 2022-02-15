// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
// import firebase from "firebase";

// Images
import logoCT from "assets/images/logos/logo-1.png";
// import { useState } from "react";
import Instagram from "@mui/icons-material/Instagram";

const date = new Date().getFullYear();

export default {
  // const database = firebase.database();

  // const [fb, setFB] = useState("#");
  // const [twitter, setTwitter] = useState("#");
  // const [insta, setInsta] = useState("#");

  // database.ref("webContents").on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   Object.entries(data).forEach((item) => {
  //     const [key, value] = item;
  //     if (key === "fbLink") {
  //       setFB(value);
  //     }
  //     if (key === "twitterLink") {
  //       setTwitter(value);
  //     }
  //     if (key === "instagramLink") {
  //       setInsta(value);
  //     }
  //   });
  // });

  brand: {
    name: "Precious Gem",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://web.facebook.com/Preciousgemdiagnostics",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <Instagram />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/about-us" },
        { name: "contact us", href: "/contact-us" },
      ],
    },
    {
      name: "Others",
      items: [
        { name: "appointment", href: "/appointment" },
        { name: "gallery", href: "/gallery" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All Rights Reserved. Copyright &copy; {date} Precious Gem | Website by{" "}
      <MKTypography
        component="a"
        href="https://noelzappy.github.io"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Zappy
      </MKTypography>
      .
    </MKTypography>
  ),
};
