import React from "react";
import {AiOutlineMail,AiOutlineWhatsApp,AiFillGithub} from "react-icons/ai"
import {CiLinkedin} from "react-icons/ci"
import { useTranslation } from "react-i18next";


function Contact (){
  
  const { i18n, t } = useTranslation("global");

    const abrirCorreo = () => {
        const correo = 'saramarulanda12@gmail.com';
        const asunto = 'PROPUESTA DE COLABORACION // COLLABORATION PROPOSAL ';
        const cuerpo = '';
    
        window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      };
    return(
        <section id="contact">
        <div>
        <div>
            <h1>{t("contact.question")}</h1>
            <h1>{t("contact.call")}</h1>

            <div>
<a href="#" onClick={abrirCorreo}>
  <AiOutlineMail/> saramarulanda12@gmail.com
</a>
<h1>
    <AiOutlineWhatsApp/>+(57) 316 873 53 47
</h1>
<div>
          <a href="www.linkedin.com/in/sara-marulanda">
            <CiLinkedin/> www.linkedin.com/in/sara-marulanda
          </a>

          <a href="https://github.com/SARAM0910">
            <AiFillGithub/> https://github.com/SARAM0910
          </a>


          </div>

</div>
          </div>
        </div>
        </section>
    )
}

export default Contact