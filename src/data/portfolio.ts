import type { Project } from "../types";
import rushImage from "../assets/portfolio/rush.png";
import batoImage from "../assets/portfolio/bato.png";

export const projects: Project[] = [
  {
    image: rushImage,
    alt: 'Rush Espresso Bar Website Image',
    header: 'Rush Espresso Bar',
    description: "Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years and has been a happy client for over 5 years.",
    url: "https://rush-espresso-bar.vercel.app",
  },
  {
    image: batoImage,
    alt: 'Bato Studio Website Image',
    header: 'Bato Studio',
    description: "Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years and has been a happy client for over 5 years.",
    url: "https://batostudio.com.au",
  },
];