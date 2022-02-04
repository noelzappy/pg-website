// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logos/logo-1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Precious Gem",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/noelzappy/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/noelzappy",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/#",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/about-us" },
        { name: "contact us", href: "/contact-us" },
        { name: "our doctors", href: "/doctors" },
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
