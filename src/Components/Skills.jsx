import React from "react";
import { skills } from "../data";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

function SkillsList (){
    const { i18n, t } = useTranslation("global");
    return(
        <section id="skills">
        <div>
            <h1>
               {t("skills.skill")}
            </h1>
        {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
      ))}
        </div>
        </section>
    )
}

export default SkillsList