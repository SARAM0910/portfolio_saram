import React from "react";
import {AiFillGithub,AiOutlineVideoCamera,AiOutlinePlayCircle} from "react-icons/ai"


function ProjectsCard({project}){

    return(
        <div>
            <div>
                <img src={project.image} alt={project.name} />
            </div>
            <div>
            <h1>Nombre:{project.name}</h1>
        </div>
         <div>
         <h1>Fecha:{project.date}</h1>
     </div>

     <div>
        <h1>Descripcion:{project.description}</h1>
     </div>
     <div> Stack: 
  {project.tecnologies.map((tech, index) => (
    <span key={index}> {tech} {index !== project.tecnologies.length - 1 && " | "}
    </span>
  ))}
</div>
     <div>
     {project.deploy && (
        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
         <AiOutlinePlayCircle /> Ver en vivo 
        </a>
      )}
      <a href={project.repository} target="_blank" rel="noopener noreferrer">
      <AiFillGithub /> Repositorio 
      </a>
      {project.video && (
        <a href={project.video} target="_blank" rel="noopener noreferrer">
          <AiOutlineVideoCamera /> Ver video 
        </a>
      )}
      </div>
     </div>
    )
}

export default ProjectsCard