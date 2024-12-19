// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/forest_light.jpg";
import HeroDark from "./images/forest_dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

import navigation from "./images/logo.png"

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ahoelt1120";

// Navbar Logo image
export const navLogo = navigation;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a fourth-year computer science student at the University of Oregon currently looking for an entry-level software development job for when I graduate in Spring 2025. I am a student ambassador for the Computer Science Department. I have also been a learning assistant for the CS 122 Introduction to Python class and the CS 211 Computer Science II. It is important to me that there is a community in the computer science major. That is why I am proud to be the president of the Women In Computer Science club.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="lineicons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="devicon-plain:cplusplus" className="display-4" />,
    name: "C++",
  },
  {
    id: 3,
    skill: <Icon icon="hugeicons:c-programming" className="display-4" />,
    name: "C",
  },
  {
    id: 4,
    skill: <Icon icon="hugeicons:sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 7,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 8,
    skill: <Icon icon="ri:java-fill" className="display-4" />,
    name: "Java",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "Git",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/15WvaeUwuzsUaC-EIWW9VpgtEHcikYWUR2tlwaaXO0kU/edit?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Lets-Cook-Web-App", "Simple-Webserver", "task_manager"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
