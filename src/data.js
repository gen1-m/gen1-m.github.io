// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiPython, 
  SiC,
  SiCplusplus
 } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import cIcon from "./images/c-icon.jpg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "uncrownedking1";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Welcome to my website. I am a new developer called Eugen Mamaj and my alias in Github is UncrownedKing1. " + 
  "I am fascinated from the world of computers and to deepen my knowledge about them, I am currently pursuing"  +
  " a degree in Computer Science. Below you can see my skills, look through some of my projects and if you want" +
  " to contact me just complete the form below and I will get back to you as soon as possible.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 7,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <SiC className="display-4" />,
    name: "C Language",
  },
  {
    id: 10,
    skill: <SiCplusplus className="display-4" />,
    name: "C++ Language"
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1LKIWEztBDtzEntgOrNvg4O067Z_x5tG-/view?usp=share_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["kingas-class-with-names", "my-website"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "kingas-class-with-names",
    image: cIcon,
  },
  {
    name: "my-website",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mqkjrpqo";
