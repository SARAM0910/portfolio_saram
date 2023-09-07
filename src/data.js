import wabderlust from "./Assets/HOMEWANDERLUST.PNG"
import videogames from "./Assets/Videogames.PNG"
import {DiJavascript1,DiReact,DiCss3Full,DiNodejsSmall,DiPostgresql} from "react-icons/di"
import {SiRedux,SiTailwindcss} from "react-icons/si"
import{AiOutlineHtml5} from "react-icons/ai"

export const projects=[
    {
        name:"WANDERLUST",
        date:"AGOSTO 2023",
        description:"Este proyecto conecta a los usuarios dependiendo de su perfil con paquetes de viaje y actividades turísticas al rededor del mundo, comentarios y reviews o los datos de ventas, usuarios registrados, paquetes ofertados o edición de los existentes.",
        tecnologies:["React", "Redux", "TailwindCSS", "HTML5", "Firebase", "PostgreSQL", "Sequelize", "Express", "Cloudinary", "Nodemailer", "Axios", "Vercel", "Railway"],
        image:wabderlust,
        deploy:"https://wanderlust-phi.vercel.app",
        repository:"https://github.com/Wanderlust-8/wanderlust",
        video:"https://www.youtube.com/watch?v=zCYnhixTC0c"
    },
    {
        name:"VIDEOGAMES",
        date:"JULIO 2023",
        description:"Aplicación que tenía como objetivo conectar una API externa https://api.rawg.io/api/games para que se puedan renderizar, paginar, filtrar y buscar diferentes videojuegos, así como crear sus propios juegos agregándolos a nuestra base de datos en Postgrest.",
        tecnologies:["JavaScript", "React", "Redux", "CSS3", "NodeJS", "Express", "PostgreSQL"],
        image:videogames,
        deploy:"",
        repository:"https://github.com/SARAM0910/PI-Videogames-main",
        video:""
    }
]

export const skills=[
    {
    skill: "JavaScript",
    icon: <DiJavascript1/>
    },
    {
        skill:"React",
        icon: <DiReact/>
    },
    {
        skill:"Redux",
        icon:<SiRedux/>
    },
    {
        skill:"CSS3",
        icon:<DiCss3Full/>
    },
    {
        skill:"HTML5",
        icon: <AiOutlineHtml5/>
    },
    {
        skill:"TailwindCSS",
        icon:<SiTailwindcss/>
    },
    {
        skill: "NodeJS",
        icon: <DiNodejsSmall/>
    },
    {
        skill:"PostgreSQL",
        icon:<DiPostgresql/>
    }
]

export const certificates = [{
    title: "FullStack Web Developer",
    img: "https://certificates.soyhenry.com/new-cert?id=7f9b760bb0c0a373e68d940b10ff0d70cd01843949685969495fff4ddf151e96"
},
{
    title: "English C2 Proficient",
    img: "https://www.efset.org/cert/wGqp49"
},
{
    title: "HTML5y CSS3",
    img: "https://platzi.com/p/saramarulanda12/curso/2008-html-css/diploma/detalle/"
}
]
