export const skills = [
  {
    title: "Communication",
    description:
      "Interacting effectively with other developers, as well as with non-technical stakeholders. This includes being able to explain technical concepts in a clear and concise way, as well as being able to understand and respond to feedback.",
    extra:
      "Building a personal connection with people: developers & non-technical stakeholders in order to understand their taste from their personalities and be able to deliver on their proposed requirements is crucial and this is done through proper communication and comprehension",
  },
  {
    title: "Problem-solving",
    description:
      "ability to solve problems independently. This includes being able to identify the root cause of a problem, as well as being able to come up with creative solutions.",
  },
  {
    title: "Continuous learning",
    description:
      "The field of web development is constantly evolving so i endeavour to learn new technologies and techniques on an ongoing basis.",
  },
  {
    title: "Pragmatism",
    description:
      "The ability of writing practical units, functions and components code in an organized and reusable model",
  },
];

export const services = [
  {
    id: 0,
    name: "API Integration",
    description:
      "Utilizing external application programming interfaces within web applications to leverage existing functionalities and data from other systems.",
    link: "Learn More",
  },

  {
    id: 1,
    name: "Backend-as-a-service",
    description:
      "helping businesses build and deploy their applications quickly and easily by providing a number of benefits including: Reduced development time, Increased scalability & Enhanced security",
    link: "Learn More",
  },
  {
    id: 2,
    name: "Design To Code",
    description:
      "Translating UI/UX design's visual elements, layout, and user interactions into code to create a functional and visually appealing web interface.",
    link: "Learn More",
  },
  {
    id: 3,
    name: "State Management",
    description:
      "Managing and storing data used across different parts of a web application. Ensuring that all components have access to the most up-to-date and consistent data, enabling them to work together effectively.",
    link: "Learn More",
  },
];

//project Images
import marvel from "../assets/marvelverse-home.png";
import vortexGlide from "../assets/vortexglide.png";
import socialTract from "../assets/social-tract.png";
import analytics from "../assets/analytics.png";
import evobank from "../assets/evobank-home.png";
import medilifi from "../assets/medilifi.png";
import bookstore from "../assets/bookstore.png";
import mockapi from "../assets/mock-api.png";
import animevault from "../assets/animevault.png";

export const projects = [
  {
    title: "MarvelVerse",
    description:
      "Marvel's vast collection of characters, comics, creators, events, series and stories.",
    image: marvel,
    tools: ["React", "TailwindCSS", "Redux-toolkit"],
    tags: "API Integration, State Management",
    type: ["Front End", "API"],
    source: "https://github.com/Andreyhuey/marvelverse",
    visit: "https://marvel-verse-app.netlify.app/events",
    figma: "",
    id: 1,
  },
  {
    title: "VortexGlide",
    description: "A Landing page for a gaming website advertising services for interested clients",
    image: vortexGlide,
    tools: ["NextJs", "TypeScript", "TailwindCSS"],
    tags: "Design To Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/vortexglide",
    visit: "https://vortexglide.vercel.app/",
    figma:
      "https://www.figma.com/file/fm9xqw2T54wNs5vecNhHiK/Gaming-Platform---Web-Design-(Community)?type=design&node-id=1-4&mode=design&t=Pn0YTD86r5CsZ95s-0",
    id: 2,
  },
  {
    title: "SocialTract",
    description:
      "A Landing page for a social & corporate domain for connecting with people all around the world",
    image: socialTract,
    tools: ["Nextjs", "TypeScript", "TailwindCSS"],
    tags: "Design To Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/social-tract",
    visit: "https://social-tract.vercel.app/",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 3,
  },
  {
    title: "Analytics",
    description:
      "A business intelligence domain for data mining, process analysis, performance benchmarking and descriptive analytics",
    image: analytics,
    tools: ["Nextjs", "TypeScript", "TailwindCSS"],
    tags: "Design to Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/analytics",
    visit: "https://analytics-tan.vercel.app",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 4,
  },

  {
    title: "Evobank",
    description: "A landing page for a banking web application",
    image: evobank,
    tools: ["React", "TypeScript", "TailwindCSS"],
    type: ["Front End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/evobank",
    visit: "https://evob.vercel.app/",
    figma: "",
    id: 5,
  },
  {
    title: "Medilifi",
    description: "My final year thesis centerd around a light fidelity patient monitoring device that monitors the vitals (temperature, heart rate and oxygen saturation levels) of a patient",
    image: medilifi,
    tools: ["Firebase", "ReduxToolkit", "TypeScript", "TailwindCSS"],
    type: ["Front End", "API", "Back End", "Hardware"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/medilifi",
    visit: "https://medilifi.vercel.app/",
    figma: "",
    id: 6,
  },
  {
    title: "Mock-Api",
    description:
      "A node.js based solution tailored for front-end developers seeking rapid and dependable mock API services. designed to bridge the gap between UI development and back-end readiness.",
    image: mockapi,
    tools: [
      "node.js",
      "fakerjs",
      "fs",
      "json-schema",
      "json-schema-faker",
      "json-server",
    ],
    type: ["API", "Back End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/andreyhuey/mock-api",
    visit: "https://github.com/andreyhuey/mock-api",
    id: 7,
  },
  {
    title: "Bookstore",
    description:
      "A web based project built with MongoDB, Express.js, React & Node.js (M.E.R.N) that enables users to list, add, update, and delete books",
    image: bookstore,
    tools: ["node.js", "express", "mongodb", "react", "TailwindCSS"],
    type: ["Front End", "API", "Back End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/bookstore",
    visit: "https://bookstore-frontend-taupe.vercel.app/",
    id: 8,
  },
  {
    title: "Anime Vault",
    description:
      "A modern Next 14 Server Side App built with Server Actions, Infinite Scroll & Framer Motion Animations developed during my nextjs dev journey",
    image: animevault,
    tools: ["TypeScript", "TailwindCSS", "Nextjs"],
    type: ["Front End", "API"],
    tags: "Dev Journey, API Integration",
    source: "https://github.com/Andreyhuey/anime_vault",
    visit: "https://anime-vault-seven-mu.vercel.app/",
    id: 9,
  },
];

// tool images
import api from "../assets/tools/api.png";
import bootstrap from "../assets/tools/bootstrap.png";
import firebase from "../assets/tools/firebase.svg";
// import git from "../assets/tools/git.png";
// import github from "../assets/tools/github.png";
// import tailwind from "../assets/tools/tailwind.png";
import react from "../assets/tools/react.png";
import sanity from "../assets/tools/sanity.svg";

export const tools = [
  {
    title: "API",
    image: api,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "Firebase",
    image: firebase,
  },
  // {
  //   title: "Git",
  //   image: "git",
  // },
  // {
  //   title: "Github",
  //   image: "github",
  // },
  {
    title: "React",
    image: react,
  },
  // {
  //   title: "Docker",
  //   image: docker
  // }
  // {
  //   title: "ReduxToolkit",
  //   image: "../assets/react.png",
  // },
  // {
  //   title: "Express",
  //   image: "",
  // },
  // {
  //   title: "NodeJs",
  //   image: "",
  // },
  // { title: "Vercel", image: "" },
  // {
  //   title: "MongoDb",
  //   image: "",
  // },
  // {
  //   title: "Postman",
  //   image: "",
  // },
  // {
  //   title: "PHP",
  //   image: "",
  // },
  // {
  //   title: "Hostinger",
  //   image: "",
  // },
  // {
  //   title: "RapidApi",
  //   image: "",
  // },
  // {
  //   title: "EmailJs",
  //   image: "",
  // },
  // {
  //   title: "CRUD",
  //   image: "",
  // },
  // {
  //   title: "GraphQl",
  //   image: "",
  // },
  // {
  //   title: "NextJs",
  //   image: "../assets/react.png",
  // },
  // {
  //   title: "TypeScript",
  //   image: "../assets/tailwind.png",
  // },
  {
    title: "Sanity",
    image: sanity,
  },
  // {
  //   title: "TailwindCSS",
  //   image: tailwind,
  // },
  // {
  //   title: "Zustand",
  //   image: zustand,
  // },
];
