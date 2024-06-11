// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaNode,
  FaLinkedin
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiFirebase,
  SiReact,
  SiPhp,
  SiTailwindcss,
  SiGooglecloud,
  SiMicrosoftoffice,
  SiAdobecreativecloud,
  SiGnubash
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)

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
export const githubUsername = "gen1-m";

// Blog link icon (imported above)
export const Blog = <FaLink />;
export const LinkedIn = <FaLinkedin />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Welcome to my website. I am Eugen Mamaj and I am an aspiring developer." +
  "I am fascinated from the world of computers and to deepen my knowledge about them, I am currently pursuing"  +
  " a degree in Computer Science. Below you can see my skills and look through some of my projects." +
  " If you feel like contacting me just complete the form below and I will get back to you as soon as possible.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiC className="display-4" />,
    name: "C Language",
  },
  {
    id: 2,
    skill: <SiCplusplus className="display-4" />,
    name: "C++ Language",
  },
  {
    id: 3,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 5,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 6,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 7,
    skill: <SiPhp className="display-4" />,
    name: "PHP",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <SiGnubash className="display-4" />,
    name: "Bash",
  },
  {
    id: 11,
    skill: <SiReact className="display-4" />,
    name: "React",
  },
  {
    id: 12,
    skill: <SiTailwindcss className="display-4" />,
    name: "Tailwind CSS",
  },
  {
    id: 13,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 14,
    skill: <SiFirebase className="display-4" />,
    name: "Google Firebase",
  },
  {
    id: 15,
    skill: <SiGooglecloud className="display-4" />,
    name: "Google Cloud",
  },
  {
    id: 16,
    skill: <FaNode className="display-4" />,
    name: "Node.js",
  },
  {
    id: 17,
    skill: <SiMicrosoftoffice className="display-4" />,
    name: "Microsoft Office",
  },
  {
    id: 18,
    skill: <SiAdobecreativecloud className="display-4" />,
    name: "Adobe Creative Cloud",
  },
];

// Resume link
export const resume = "https://drive.google.com/file/d/1G5sDPh5SnBA2ydpWleak1-cO6-CkBFf8/view";
export const resumeDE = "https://drive.google.com/file/d/1ZcDZDoYPAJ0xPr20RZtb58QXUUZfoqcB/view";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["movie-search-horizont", "stock-research", "fintech-lib"];

// Replace the default GitHub image for matching repos below

// export const projectCardImages = [
//   {
//     name: "movie-search-horizont",
//     image: Horizont,
//   },
//   {
//     name: "stock-research",
//     image: StockResearch,
//   },
//   {
//     name:"fintech-lib",
//     image: FintechLib,
//   },
// ];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mqkjrpqo";
