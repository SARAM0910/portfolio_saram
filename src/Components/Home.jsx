import React from "react";
import profileImg from "../Assets/profileImg.PNG";
import {CiLinkedin} from "react-icons/ci"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

function Home() {

    const abrirCorreo = () => {
        const correo = 'saramarulanda12@gmail.com';
        const asunto = 'PROPUESTA DE COLABORACION // COLLABORATION PROPOSAL ';
        const cuerpo = '';
    
        window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      };

  return (
    <div>
      <section id="home">
        <div>
          <h1>HOLA! Bienvenido a mi espacio digital </h1>
        </div>

        <div>
          <h1>Soy Sara Marulanda</h1>
        </div>

        <div>
          <h2>
            soy una desarrolladora Web Apasionada y Creativa ubicada en Medellin,
            Colombia
            </h2>
            <div>
            <div>
    desarrolladora Web
</div>
<div>
    Negociadora internacional 
</div>

            </div>

        </div>

          <h2>¿Listo para comenzar un proyecto?</h2>

          <div>
          Contáctame para que podamos hablar de tus necesidades y objetivos.

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
