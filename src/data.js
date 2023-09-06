import wabderlust from "./Assets/HOMEWANDERLUST.PNG"
import videogames from "./Assets/Videogames.PNG"

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


