import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

{/* Project Images */ }
import calculatorLogo from "./assets/project_logo/calculator.jpg";
import snackLogo from "./assets/project_logo/snack.jpg";
import hospitalLogo from "./assets/project_logo/hospital.png";
import ChatAppLogo from "./assets/project_logo/chat.webp";
import ecommerceLogo from "./assets/project_logo/ecommerce.jpg";

{/* Education Images */ }
import PIMRLogo from "./assets/education_logo/PIMR.jpg";
import mpBoardLogo from "./assets/education_logo/mp.jpg";
import mpBoardLogo1 from "./assets/education_logo/images.jpg";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
    ],
  },
];


export const projects = [
  {
    id: 0,
    title: "E-Commerce Website",
    description:
      "A full-stack E-Commerce web application where users can browse products, add items to the cart, and securely place orders. Built using React, Tailwind CSS, Spring Boot, and MySQL, featuring product filtering, authentication, and responsive design.",
    image: ecommerceLogo,
    tags: ["Spring Boot", "React", "Tailwind CSS", "MySQL"],
    github: "https://github.com/Tulsi77choudhary/ecommerce",
    webapp: "https://tulsi-ecommerce.vercel.app/",
  },

  {
    id: 1,
    title: "Snack Game",
    description:
      "An interactive and responsive arithmetic game built with HTML, CSS, and JavaScript. Snack Game lets users practice addition, subtraction, multiplication, and division through a clean, intuitive interface. Lightweight and fun, it’s perfect for quick calculations, learning, and everyday use across devices.",
    image: snackLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tulsi77choudhary/SNACK-GAME",
    webapp: "https://your-username.github.io/SNACK-GAME",
  },

  {
    id: 2,
    title: "Hospital Appointment System",
    description:
      "A full-stack Hospital Appointment Booking System built with Spring Boot and JavaScript. Patients can register, log in, view doctors by specialty, and book, cancel, or reschedule appointments. The system includes role-based access for Admin, Doctor, and Patient, with secure authentication and a responsive design for smooth usability across devices.",
    image: hospitalLogo,
    tags: ["Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tulsi77choudhary/Hopital-Appointment-system",
    webapp: "https://your-username.github.io/Hopital-Appointment-system",
  },

  {
    id: 3,
    title: "Chat Application",
    description:
      "A real-time Chat Application built with Spring Boot, WebSockets, and MySQL for the backend, and HTML, CSS, and JavaScript for the frontend. It supports user authentication, live messaging, typing indicators, and chat rooms/private chats. The responsive design ensures a seamless chatting experience across devices.",
    image: ChatAppLogo,
    tags: ["Spring Boot", "Java", "WebSocket", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tulsi77choudhary/Chat-Application",
    webapp: "https://tulsi77choudhary.github.io/Chat-Application",
  },
  {
    id: 4,
    title: "Tic-Toc-Tic",
    description:
      "A real-time Chat Application built with Spring Boot, WebSockets, and MySQL for the backend, and HTML, CSS, and JavaScript for the frontend. It supports user authentication, live messaging, typing indicators, and chat rooms/private chats. The responsive design ensures a seamless chatting experience across devices.",
    image: ChatAppLogo,
    tags: [ "Java", "swing", "awt",],
    github: "https://github.com/Tulsi77choudhary/",
    webapp: "https://tulsi77choudhary.github.io/",
  },
  {
    id: 6,
    title: "Calculator App",
    description:
      "A sleek and interactive Calculator application built with HTML, CSS, and JavaScript. This user-friendly tool allows users to perform basic arithmetic operations with ease, including addition, subtraction, multiplication, and division. The responsive design ensures smooth usability across devices, while the intuitive interface makes calculations fast, accurate, and visually appealing. Perfect for learning, testing, or everyday calculations.",
    image: calculatorLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tulsi77choudhary/Calculator",
    webapp: "https://your-username.github.io/Calculator",
  },

];

export const education = [
  {
    id: 0,
    img: PIMRLogo,
    school: "Prestige Institute of Management and Research Bhopal",
    date: "Sept 2021 - July 2025",
    grade: "7.21 CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science from RGB University. During my studies, I gained a strong foundation in programming, data structures, algorithms, databases, and software development. I successfully built several projects such as management systems, web applications, and full-stack solutions using Java, Spring Boot, MySQL, and modern frontend technologies. This journey has enhanced my problem-solving skills, technical expertise, and passion for building real-world software solutions.",
  },
  {
    id: 1,
    img: mpBoardLogo,
    school: "Govt. Higher Secondary School, Garra, Balaghat",
    date: "Aug 2020 - Jun 2021",
    grade: "85%",
    desc: "I completed my Higher Secondary Education (12th Grade) from Govt. Higher Secondary School, Garra with a specialization in the Science stream. This phase of my academic journey helped me strengthen my knowledge in Mathematics, Physics, and Computer Science, while also improving my analytical and problem-solving skills.",
    degree: "XII Grade ",
  },
  {
    id: 2,
    img: mpBoardLogo1,
    school: "Indira Vidhya Pith High School, Garra, Balaghat",
    date: "Aug 2018 - March 2019",
    grade: "85%",
    desc: "I successfully completed my Secondary Education (10th Grade) from Indira Vidhya Pith High School, Garra, with a focus on the Science stream. During this time, I built a strong foundation in core subjects, which fueled my interest in technology and ultimately inspired me to pursue Computer Science as my career path.",
    degree: "X Grade",
  },
];
