import React from "react";
import {projects} from"../data"
import ProjectsCard from "./ProjectCard";

function ProjectsList (){
    return(
        <section id="projects">
        <div>
            <h1>Proyectos destacados</h1>
            <div>
            {projects.map((project, index) => (
        <ProjectsCard key={index} project={project} />
      ))}
            </div>

        </div>
        </section>
    )
}
export default ProjectsList