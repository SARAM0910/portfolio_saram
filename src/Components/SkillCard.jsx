import React from "react";

function SkillCard({skill,icon}){

    return(
        <div>
          <div className="skill-card">
      {icon}
      <h3>{skill}</h3>
    </div>
    </div>
    )
}

export default SkillCard