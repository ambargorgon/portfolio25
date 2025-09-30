import IconButton from './common/Button';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import projectsEs from "../text/projects.es";
import projectsEn from "../text/projects.en";

type Props = {}

const HeaderProject = (props: Props) => {
    const { t, i18n } = useTranslation();
    const { id } = useParams<{ id: string }>();
  
    const projects = i18n.language === "es" ? projectsEs : projectsEn;
    const project = projects.find((p) => p.id === id);
  
  return (

          <header className=" pt-24 flex flex-col md:flex-row md:items-center gap-6 w-full">
            {/* Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{project.title}</h1>
              <p className="text-base sm:text-lg md:text-xl">{project.description}</p>
    
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                {project.tags.map((tag, idx) => (
                  <IconButton
                    key={idx}
                    text={tag}
                    iconSrc={`/icons/${tag.toLowerCase()}.svg`}
                    alt={`${tag} icon`}
                  />
                ))}
              </div>
    
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm mt-4">
                <div className="flex items-center gap-2">
                  <img src="/icons/calendar.svg" alt="calendar" className="w-5 sm:w-6" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/team.svg" alt="team" className="w-5 sm:w-6" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/target.svg" alt="rol" className="w-5 sm:w-6" />
                  <span>{project.target}</span>
                </div>
              </div>
            </div>
    
            {/* Imagen */}
            <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain w-[80%] sm:w-[60%] md:w-[90%] rounded-xl shadow-lg"
              />
            </div>
          </header>
  )
}

export default HeaderProject