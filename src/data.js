import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaNode,
  FaLinkedin,
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
  SiGnubash,
  SiTypescript,
  SiMysql,
  SiSupabase,
  SiNextdotjs,
  SiCmake,
  SiSocketdotio,
  SiOpencv,
  SiOpenai,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiExpress,
} from "react-icons/si";

import HeroLight from "./images/panoramic-hero-light.webp";
import HeroDark from "./images/hero-dark.webp";

export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "gen1-m";

// Links
export const Blog = <FaLink />;
export const LinkedIn = <FaLinkedin />;

// Paragraph text
export const moreInfo =
  "Welcome to my website. I am Eugen Mamaj and I am an aspiring developer." +
  "I am fascinated from the world of computers and to deepen my knowledge about them, I am currently pursuing" +
  " a degree in Computer Science. Below you can see my skills and look through some of my projects." +
  " If you feel like contacting me just complete the form below and I will get back to you as soon as possible.";

// Skills
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
    skill: <SiCmake className="display-4" />,
    name: "CMake",
  },
  {
    id: 4,
    skill: <SiPhp className="display-4" />,
    name: "PHP",
  },
  {
    id: 5,
    skill: <SiMysql className="display-4" />,
    name: "MySql",
  },
  {
    id: 6,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 7,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 8,
    skill: <SiTailwindcss className="display-4" />,
    name: "Tailwind CSS",
  },
  {
    id: 9,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 10,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 11,
    skill: <SiTypescript className="display-4" />,
    name: "Typescript",
  },
  {
    id: 12,
    skill: <FaNode className="display-4" />,
    name: "Node.js",
  },
  {
    id: 13,
    skill: <SiSocketdotio className="display-4" />,
    name: "Socket.io",
  },
  {
    id: 14,
    skill: <SiExpress className="display-4" />,
    name: "Express.js",
  },
  {
    id: 15,
    skill: <SiReact className="display-4" />,
    name: "React",
  },
  {
    id: 16,
    skill: <SiNextdotjs className="display-4" />,
    name: "Next.js",
  },
  {
    id: 17,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 18,
    skill: <SiOpenai className="display-4" />,
    name: "OpenAI API",
  },
  {
    id: 19,
    skill: <SiPandas className="display-4" />,
    name: "Pandas",
  },
  {
    id: 20,
    skill: <SiScikitlearn className="display-4" />,
    name: "Scikit-learn",
  },
  {
    id: 21,
    skill: <SiTensorflow className="display-4" />,
    name: "Tensorflow",
  },
  {
    id: 22,
    skill: <SiOpencv className="display-4" />,
    name: "OpenCV",
  },
  {
    id: 23,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 24,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 25,
    skill: <SiGnubash className="display-4" />,
    name: "Bash",
  },
  {
    id: 26,
    skill: <SiSupabase className="display-4" />,
    name: "Supabase",
  },
  {
    id: 27,
    skill: <SiFirebase className="display-4" />,
    name: "Firebase",
  },
  {
    id: 28,
    skill: <SiGooglecloud className="display-4" />,
    name: "Google Cloud Platform",
  },
  {
    id: 29,
    skill: <SiMicrosoftoffice className="display-4" />,
    name: "Microsoft Office",
  },
  {
    id: 30,
    skill: <SiAdobecreativecloud className="display-4" />,
    name: "Adobe Creative Cloud",
  },
];

// Resume link
export const resume =
  "https://drive.google.com/file/d/1iP1vCKGjr2T8hM6JG1Mv59i9prfEzJW3/view";
export const resumeDE =
  "https://drive.google.com/file/d/15Thi7swG3strtNBv3cJ3MJ4to29Ga7GK/view";

// Projects
export const filteredProjects = [
  "movie-search-horizont",
  "stocklib",
  "fintech-lib",
];

// Project Card Images
export const projectCardImages = [
  {
    name: "movie-search-horizont",
  },
  {
    name: "stocklib",
  },
  {
    name: "fintech-lib",
  },
];

// formSpree endpoint
export const formspreeUrl = "https://formspree.io/f/mqkjrpqo";
