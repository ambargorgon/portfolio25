// src/components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./common/ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <div className="relative flex flex-col md:items-stretch">
      <h3 className="w-[90%] ml-10 border-b-1 self-end font-bold pr-36 my-16 text-right pb-2 text-2xl border-white ">Proyectos</h3>
      <section className=" flex flex-col self-center items-center justify-center px-4 md:px-20 h-[100%]">
        <ProjectCard
          image="/images/estoyaca.webp"
          title="Estoyacá - App para encontrar trabajadores"
          description="Desarrollo del FrontEnd de una aplicación multiplataforma que permite conectar trabajadores con solicitantes de servicios para el hogar. Integración de geolocalización y mensajería por Websockets."
          tags={["Expo", "Typescript", "React Native", "Tailwind CSS"]}
        />

        <ProjectCard
          image="/images/chimi.webp"
          title="Chimi Deli - Menú Accesible"
          description="Diseño y desarrollo de un menú gastronómico accesible para personas con discapacidad poniendo foco en la usabilidad y experiencia de usuario."
          tags={["React", "Figma", "Sólo móvil"]}
          linkUrl="https://chimi-menu-adaptado.vercel.app/"
          reverse
        />

        <ProjectCard
          image="/images/buensabor.webp"
          title="El Buen Sabor - Ecommerce y Gestor de restaurante"
          description="Desarrollo del FrontEnd en Next.js para un sistema de gestión interna y eCommerce de un restaurante ficticio, con documentación y conexión a un backend en Spring Boot."
          tags={["Next.js", "Typescript", "SpringBoot", "MySQL"]}
          codeUrl="https://github.com/Maiten-Oviedo/ElBuenSaborFrontend"
        />
        <ProjectCard
          image="/images/zoomout.webp"
          title="Zoomout - Ecommerce de Moda"
          description="Diseño de marca y desarrollo de tienda de ropa ficticia con almacenamiento en Firebase y hosteo en Vercel."
          tags={["Firebase", "React", "Javascript"]}
          codeUrl="https://github.com/ambargorgon/proyecto-zoomout-ecommerce"
          reverse
        />
      </section>
    </div>
  );
};

export default ProjectsSection;
