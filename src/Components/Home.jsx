import React from "react";
import profileImg from "../Assets/profileImg.PNG";
import {CiLinkedin} from "react-icons/ci"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { useTranslation } from "react-i18next";

function Home() {
  const { i18n, t } = useTranslation("global");

    const abrirCorreo = () => {
        const correo = 'saramarulanda12@gmail.com';
        const asunto = t("home.home_email_subject");
        const cuerpo = '';
    
        window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      };

  return (
    <div>
      <section id="home">
        <div>
          <h1>{t("home.home_greeting")}</h1>
        </div>

        <div>
          <h1>{t("home.home_name")}</h1>
        </div>

        <div>
          <h2>
          {t("home.home_description")}
            </h2>
            <div>
   

            </div>

        </div>

          <h2>{t("home.home_ready")}</h2>

          <div>
          {t("home.home_contact")}

<a href="#" onClick={abrirCorreo}>
  <AiOutlineMail/>
</a>
          </div>
<div>
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

          <div>

          </div>

        <div>
          <img src={profileImg} alt="Sara" />
        </div>
      </section>
    </div>
  );
}

export default Home;
