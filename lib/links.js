import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

export const navLinks = [
  {
    title: "Home",
    path: "/",
    category: "home",
  },
  {
    title: "Technology",
    path: "/technology",
    category: "technology",
  },
  {
    title: "Traveling",
    path: "/traveling",
    category: "traveling",
  },
  {
    title: "Psychology",
    path: "/psychology",
    category: "psychology",
  },
];

export const socialLinks = [
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: (
      <FontAwesomeIcon
        icon={faFacebookSquare}
        size="2xl"
      />
    ),
  },
  {
    title: "X",
    link: "https://www.x.com",
    icon: (
      <FontAwesomeIcon
        icon={faSquareXTwitter}
        size="2xl"
      />
    ),
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com",
    icon: (
      <FontAwesomeIcon
        icon={faYoutubeSquare}
        size="2xl"
      />
    ),
  },
];
