// ./projects/projects.es.ts
import { Project } from "./projectstype";

const projects: Project[] = [
  {
    id: "1",
    image: "/images/galeria-estoyaca/portada.webp",
    title: "EstoyAcá - App para encontrar trabajadores",
    description:
      "Aplicación multiplataforma que conecta solicitantes y trabajadores a través de proximidad.",
    about:
      "EstoyAcá es una aplicación multiplataforma que conecta trabajadores con clientes que necesitan servicios para el hogar. <br> A través de sistemas de <1>geolocalización</1> los usuarios solicitan trabajadores para el hogar, detallando la cita y el trabajo a realizar. <br> Al momento de conectar, se conectan con mensajería con Websockets.",
    rol: "Estuve a cargo del desarrollo <1>Frontend en React Native</1>, trabajando junto al equipo de diseño para crear interfaces intuitivas y atractivas. Implementé componentes reutilizables y la lógica de interacción para la <1>generación de peticiones</1>, paneles de 'Mi Perfil' y la conexión con el backend a través de endpoints.",
    date: "Junio 2025 - Agosto 2025",
    team: "4 desarrolladores",
    target: "Frontend",
    tags: ["Expo", "Typescript", "React Native", "WebSockets", "Maps"]
  },
  {
    id: "2",
    image: "/images/galeria-chimi/portada.webp",
    title: "Chimi Deli - Menú accesible",
    description:
      "Menú digital de restaurante adaptado para personas con discapacidad.",
    about:
      "Diseño y desarrollo de un <1>Menú Digital Accesible</1> para personas con discapacidad, con mejoras de usabilidad e incorporación de contenido en videos de lengua de señas. <br/> También cuenta con usabilidad a través de <1>TalkBack</1>, iconografía personalizada y colores con contrastes <1>AAA</1>. <br/>Construido con React y prototipado en Figma, el proyecto busca brindar acceso igualitario a la información gastronómica.",
    rol: "Me encargué del diseño teniendo en cuenta las pautas WCAG, y generando <1>+50 iconos vectorizados </1> para la navegación en el menú. <br> Luego, guioné y edité los videos junto a una <1>intérprete de señas</1>. <br>El desarrollo lo llevé a cabo con supervisión de profesionales del área, poniendo con foco en la accesibilidad, creando un menú dinámico en React y asegurando el cumplimiento de las pautas básicas de WCAG.",
    date: "Julio 2024 - Septiembre 2024",
    team: "Proyecto individual",
    target: "Diseño & Frontend",
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
    title: "El Buen Sabor - Ecommerce & ERP gastronómico",
    description:
      "Plataforma web fullstack para pedidos online, gestión de productos y panel administrativo.",
    about:
      "El Buen Sabor es un sistema completo de ventas gastronómicas con integración de carrito con <1>Mercado Pago</1>, gestión de usuarios con OAuth0 y base de datos MySQL. <br/> <br/> Contiene un panel administrativo con seguimiento de pedidos en tiempo real mediante WebSockets, estadísticas, control de stock, gestión de empleados y más. <br/> Desarrollado en equipo a partir de <1>historias de usuario y metodología SCRUM",
    rol: "Fui parte activa tanto en el área de diseño —incluyendo la creación del logo y la experiencia UX/UI— como en el desarrollo del frontend con <1>Next.js, TypeScript y Tailwind</1>, trabajando siempre en conjunto con el equipo para alinear usabilidad y estética de la marca.",
    date: "Marzo 2025 - Julio 2025",
    team: "4 desarrolladores",
    target: "Diseño & Frontend",
    tags: ["Next.js", "Typescript", "SpringBoot", "MySQL", "WebSockets", "MercadoPago"],
    codeUrl: "https://github.com/Maiten-Oviedo/ElBuenSaborFrontend",
    gallery: [{ type: "video", src: "/videos/demo-buensabor.mp4" },
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
    title: "Segno - App para registrar tu creatividad",
    description:
      "Aplicación colaborativa para músicos que permite crear y compartir maquetas musicales.",
    about:
      "Este proyecto consistió en el diseño de una herramienta digital orientada a la <1>colaboración musical</1>. <br/> La app integra espacios específicos para cada instrumento — guitarra, piano, voz o batería — donde los usuarios pueden registrar acordes, letras, tablaturas y anotaciones. <br/> El objetivo fue crear un entorno <1>claro y estructurado</1> que acompañe tanto la composición colectiva como la documentación del proceso creativo.",
    rol: "Me encargué del <1>diseño UX/UI</1> completo, desde la definición conceptual hasta el prototipo interactivo en Figma. <br/> Entre mis tareas principales estuvieron la investigación y benchmarking de plataformas de música colaborativa, la definición de flujos de navegación e información, el desarrollo de un sistema visual enfocado en la <1>simplicidad y practicidad</1>, y la construcción del <1>prototipo funcional</1> en Figma junto a material gráfico para Behance.",
    date: "Marzo 2023 - Mayo 2023",
    team: "Proyecto individual",
    target: "Diseño UX/UI",
  
    prototypeUrl: "https://www.behance.net/gallery/158654637/Segno-Diseno-UX_UI",
    tags: ["Figma", "Material Design"],
    reverse: true,
    gallery: [{ type: "video", src: "/videos/demo-segno.mp4" },
      { type: "image", src: "/images/galeria-segno/1.webp" },
      { type: "image", src: "/images/galeria-segno/2.webp" },
      { type: "image", src: "/images/galeria-segno/3.webp" },
      { type: "image", src: "/images/galeria-segno/4.webp" },
    ]
  }
];

export default projects;
