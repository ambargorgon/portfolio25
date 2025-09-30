// ./projects/projects.en.ts
import { Project } from "./projectstype";

const projects: Project[] = [
  {
    id: "1",
    image: "/images/galeria-estoyaca/portada.webp",
    title: "EstoyAcá - App to find workers",
    description:
      "Cross-platform application that connects clients and workers through proximity.",
    about:
      "EstoyAcá is a cross-platform application that connects workers with clients who need home services. <br> Through <1>geolocation</1> systems, users request workers for household tasks, detailing the appointment and the work to be done. <br> Once connected, they communicate via messaging using Websockets.",
    rol: "I was in charge of <1>Frontend development in React Native</1>, working alongside the design team to create intuitive and attractive interfaces. I implemented reusable components and interaction logic for <1>request generation</1>, 'My Profile' panels, and connection to the backend through endpoints.",
    date: "June 2025 - August 2025",
    team: "4 developers",
    target: "Frontend",
    tags: ["Expo", "Typescript", "React Native", "WebSockets", "Maps"]
  },
  {
    id: "2",
    image: "/images/galeria-chimi/portada.webp",
    title: "Chimi Deli - Accessible Menu",
    description:
      "Digital restaurant menu adapted for people with disabilities.",
    about:
      "Design and development of an <1>Accessible Digital Menu</1> for people with disabilities, with usability improvements and incorporation of sign language video content. <br/> It also features usability through <1>TalkBack</1>, custom iconography, and <1>AAA</1> contrast colors. <br/>Built with React and prototyped in Figma, the project aims to provide equal access to gastronomic information.",
    rol: "I was in charge of the design, taking into account WCAG guidelines, and creating <1>+50 vector icons</1> for menu navigation. <br> Then, I scripted and edited the videos with a <1>sign language interpreter</1>. <br>The development was carried out under the supervision of professionals in the field, focusing on accessibility, creating a dynamic React menu, and ensuring compliance with WCAG basic guidelines.",
    date: "July 2024 - September 2024",
    team: "Individual project",
    target: "Design & Frontend",
    tags: ["React", "Figma", "Mobile"],
    linkUrl: "https://chimi-menu-adaptado.vercel.app/",
    reverse: true,
    gallery: [
      { type: "video", src: "/videos/demo-chimi.mp4" },
      { type: "image", src: "/images/galeria-chimi/1.webp" },
      { type: "image", src: "/images/galeria-chimi/2.webp" },
      { type: "image", src: "/images/galeria-chimi/3.webp" },
      { type: "image", src: "/images/galeria-chimi/4.webp" },
    ]
  },
  {
    id: "3",
    image: "/images/galeria-buensabor/portada.webp",
    title: "El Buen Sabor - Ecommerce & Gastronomic ERP",
    description:
      "Fullstack web platform for online orders, product management, and admin panel.",
    about:
      "El Buen Sabor is a complete gastronomic sales system with shopping cart integration with <1>Mercado Pago</1>, user management with OAuth0, and MySQL database.<br/> <br/> It includes an admin panel with real-time order tracking via WebSockets, statistics, stock control, employee management, and more. <br/> Developed as a team based on <1>user stories and SCRUM methodology</1>.",
    rol: "I actively participated in both the design area —including the creation of the logo and the UX/UI experience— and frontend development with <1>Next.js, TypeScript, and Tailwind</1>, always working closely with the team to align usability and brand aesthetics.",
    date: "March 2025 - July 2025",
    team: "4 developers",
    target: "Design & Frontend",
    tags: ["Next.js", "Typescript", "SpringBoot", "MySQL", "WebSockets", "MercadoPago"],
    codeUrl: "https://github.com/Maiten-Oviedo/ElBuenSaborFrontend",
    gallery: [
      { type: "video", src: "/videos/demo-buensabor.mp4" },
      { type: "image", src: "/images/galeria-buensabor/1.webp" },
      { type: "image", src: "/images/galeria-buensabor/2.webp" },
      { type: "image", src: "/images/galeria-buensabor/3.webp" },
      { type: "image", src: "/images/galeria-buensabor/4.webp" },
      { type: "image", src: "/images/galeria-buensabor/5.webp" },
      { type: "image", src: "/images/galeria-buensabor/6.webp" },
    ]
  },
  {
    id: "4",
    image: "/images/galeria-segno/portada.webp",
    title: "Segno - App to record your creativity",
    description:
      "Collaborative application for musicians to create and share music demos.",
    about:
      "This project consisted of designing a digital tool aimed at <1>musical collaboration</1>. <br/> The app integrates specific spaces for each instrument — guitar, piano, vocals, or drums — where users can record chords, lyrics, tablatures, and notes. <br/> The goal was to create a <1>clear and structured</1> environment that supports both collective composition and documentation of the creative process.",
    rol: "I was in charge of the complete <1>UX/UI design</1>, from conceptual definition to the interactive prototype in Figma. <br/> My main tasks included research and benchmarking of collaborative music platforms, defining navigation and information flows, developing a visual system focused on <1>simplicity and practicality</1>, and building the <1>functional prototype</1> in Figma along with graphic material for Behance.",
    date: "March 2023 - May 2023",
    team: "Individual project",
    target: "UX/UI Design",
    prototypeUrl: "https://www.behance.net/gallery/158654637/Segno-Diseno-UX_UI",
    tags: ["Figma", "Material Design"],
    reverse: true,
    gallery: [
      { type: "video", src: "/videos/demo-segno.mp4" },
      { type: "image", src: "/images/galeria-segno/1.webp" },
      { type: "image", src: "/images/galeria-segno/2.webp" },
      { type: "image", src: "/images/galeria-segno/3.webp" },
      { type: "image", src: "/images/galeria-segno/4.webp" },
    ]
  }
];

export default projects;
