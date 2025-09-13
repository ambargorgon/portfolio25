// src/components/Timeline.tsx
import React from "react";
import TimelineItem from "./common/TimeLineItem";

const Timeline: React.FC = () => {
  return (
    <div>
      <h3 className="w-[90%] border-b-1 font-bold pl-36 my-16 pb-2 text-2xl border-white">Experiencias</h3>
      <div className=" p-6 rounded-lg w-full max-w-xl mx-auto h-[80%]">
        <TimelineItem
          title="Desarrollo FrontEnd en aplicación móvil - EstoyAcá"
          date="Mayo 2025 - Julio 2025"
          description="Encargada de acompañar el diseño y desarrollar en React Native una aplicación que conecta trabajadores y solicitantes a través de su ubicación."
        />
        <TimelineItem
          title="Desarrollo Menú Gastronómico Accesible - Chimi Deli"
          date="Marzo 2024 - Julio 2024"
          description="Diseñé y desarrollé un menú enfocado en la accesibilidad para personas con discapacidad. Prototipado en Figma y desarrollado con React."
        />
        <TimelineItem
          title="Documentadora de Smart Contracts - Tyron Network"
          date="2022"
          description="Apoyé la comprensión y usabilidad de Smart Contracts en JavaScript mediante traducción y documentación técnica, colaborando en un equipo ágil bajo SCRUM."
        />
      </div>
    </div>
  );
};

export default Timeline;
