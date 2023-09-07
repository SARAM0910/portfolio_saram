import React from "react";
import {CiLinkedin} from "react-icons/ci"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"


function Footer (){
    return(
        <div>
<div>
  <h2>Desarrollado con React por </h2>
  <h2>© Sara Marulanda </h2>
</div>

          <a href="www.linkedin.com/in/sara-marulanda">
            <CiLinkedin/>
          </a>

          <a href="https://github.com/SARAM0910">
            <AiFillGithub/>
          </a>

          <a href="https://www.instagram.com/saramarulanda1140/">
            <AiOutlineInstagram/>
          </a>

          </div>
    )
}

export default Footer