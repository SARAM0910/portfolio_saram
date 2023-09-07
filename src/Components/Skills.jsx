import React from "react";
import { skills } from "../data";
import SkillCard from "./SkillCard";

function SkillsList (){
    return(
        <section id="skills">
        <div>
            <h1>
                Mis habilidades
            </h1>
        {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
      ))}
        </div>
        </section>
    )
}

export default SkillsList