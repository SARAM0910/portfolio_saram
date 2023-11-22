import React from "react";
import {projects} from"../data"
import { useTranslation } from "react-i18next";
import {AiFillGithub,AiOutlineVideoCamera,AiOutlinePlayCircle} from "react-icons/ai"


function ProjectsList (){
    
  const { i18n, t } = useTranslation("global");

    return(
        <section id="projects">
        <div>
            <h1>Proyectos destacados</h1>
            <div>
           
                <img src={projects.project1.image} alt={projects.project1.name} />
            </div>
            <div>
            <h1>{projects.project1.name}</h1>
        </div>
        <div>
         <h1>{t("projects.project1.date")}</h1>
     </div>
     <div>
        <h1>{t("projects.project1.description")}</h1>
     </div>
     <div> Stack: 
  {projects.project1.tecnologies.map((tech, index) => (
    <span key={index}> {tech} {index !== projects.project1.tecnologies.length - 1 && " | "}
    </span>
  ))}
</div>
<div >
     {projects.project1.deploy && (
        <a href={projects.project1.deploy} target="_blank" rel="noopener noreferrer">
         <AiOutlinePlayCircle /> {t("projects.see")}
        </a>
      )}
      <a href={projects.project1.repository} target="_blank" rel="noopener noreferrer">
      <AiFillGithub /> {t("projects.repository")} 
      </a>
      {projects.project1.video && (
        <a href={projects.project1.video} target="_blank" rel="noopener noreferrer">
          <AiOutlineVideoCamera /> {t("projects.video")}
        </a>
      )}
      </div>
<div>
            <div>
           
                <img src={projects.project2.image} alt={projects.project1.name} />
            </div>
            <div>
            <h1>{projects.project2.name}</h1>
        </div>
        <div>
         <h1>{t("projects.project2.date")}</h1>
     </div>
     <div>
        <h1>{t("projects.project2.description")}</h1>
     </div>
     <div> Stack: 
  {projects.project2.tecnologies.map((tech, index) => (
    <span key={index}> {tech} {index !== projects.project2.tecnologies.length - 1 && " | "}
    </span>
  ))}
</div>
<div>
<a href={projects.project2.repository} target="_blank" rel="noopener noreferrer">
      <AiFillGithub /> {t("projects.repository")} 
      </a>
</div>
</div>

        </div>
        </section>
    )
}
export default ProjectsList