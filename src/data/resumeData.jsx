import sportifyimg from "../assets/sportifyimg.webp";
import bookclubimg from "../assets/bookclubimg.webp";
import buildmanagerimg from "../assets/buildmanagerimg.webp";
import schoolwebappimg from "../assets/schoolwebapp.webp";

export const resumeData = {
  name: "Krishna Sathyan",
  role: "Software Developer",
  
  // Theme & Headings
  hero: {
    greeting: "🌱 Growing ideas in both",
    title: "Nature & Code",
    tagline: "Bridging the gap between organic design and digital logic. I cultivate clean code and user-friendly interfaces with the patience of a gardener.",
    badges: [
      { text: "Botany Graduate", icon: "fa-seedling", color: "badge-green" },
      { text: "Software Developer", icon: "fa-code", color: "badge-brown" }
    ]
  },

skills: [
  // Tech Stack
  { name: "HTML5", icon: "fa-html5", prefix: "fab" },
  { name: "CSS3", icon: "fa-css3-alt", prefix: "fab" },
  { name: "JavaScript", icon: "fa-js", prefix: "fab" },
  { name: "React", icon: "fa-react", prefix: "fab" },
  { name: "Node.js", icon: "fa-node", prefix: "fab" },
  { name: "MongoDB", icon: "fa-database", prefix: "fas" },
  { name: "TypeScript", icon: "fa-terminal", prefix: "fas" },
  { name: "Git", icon: "fa-git-alt", prefix: "fab" },

  // Beyond Code
  { name: "UI Design", icon: "fa-paint-brush", prefix: "fas" },
  { name: "Photography", icon: "fa-camera", prefix: "fas" },
  { name: "Gardening", icon: "fa-tree", prefix: "fas" },
],

  // Experience (Cloud Forest Removed)
  experience: [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Freelance / Remote",
      date: "2026 - Present",
      desc: "Developing modern, responsive web applications for clients. Specializing in React.js front-end architecture and Node.js backends. Focusing on performance, accessibility, and organic user growth."
    },
    {
      id: 2,
      title: "MERN Stack Intern",
      company: "Luminar Technolab",
      date: "2025 - 2026",
      desc: "Gained foundational knowledge in full-stack development. Built dynamic projects including book clubs and community apps using MongoDB, Express, React, and Node."
    },
    {
      id: 3,
      title: "Bachelor of Science in Botany",
      company: "University of Kerala",
      date: "2019 - 2022",
      desc: "Graduated with distinction. Developed analytical skills and a deep understanding of biological systems, now applied to solving complex algorithmic problems."
    }
  ],
projects: [
  {
    id: 1,
    title: "Sportify",
    category: "Sports Community Web Application",
    img: sportifyimg,
    type: "web",
    desc: "A full-stack sports community platform connecting players, teams, tournaments, and sports venues. Features include turf discovery and booking, events, team creation, player profiles, tournaments, and admin management."
  },

  {
    id: 2,
    title: "BookClub",
    category: "Book Marketplace Web Application",
    img: bookclubimg,
    type: "web",
    desc: "A book marketplace web application where users can discover, buy, and sell books online, with an intuitive interface for browsing books and managing listings."
  },

  {
    id: 3,
    title: "BuildManager",
    category: "Construction Management Mobile App",
    img: buildmanagerimg,
    type: "mobile",
    desc: "A mobile application designed to help contractors manage clients, purchases, expenses, income, calculations, and project-related details efficiently in one place."
  },

  {
    id: 4,
    title: "School Web App",
    category: "School Management Web Application",
    img: schoolwebappimg,
    type: "web",
    desc: "A school management platform that brings students, parents, and teachers together in one place to simplify communication, student information, academic activities, and daily administration."
  }
],

  // Socials
  socials: [
    { name: "GitHub", icon: "fa-github", url: "https://github.com/KRISHNASATHYAN11" },
    { name: "LinkedIn", icon: "fa-linkedin-in", url: "https://www.linkedin.com/in/krishnasathyan07" },
    { name: "Email", icon: "fa-envelope", url: "mailto:krishnasathyan11@gmail.com" },
  ]
};