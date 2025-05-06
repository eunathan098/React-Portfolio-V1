// Import componentes e CSS
import Footer from "../components/Footer"
import Header from "../components/Header"
import imgPerfil from '../assets/PhotoRoom_20220918_192135 - Copia.jpg'
import './Home.css'
// import Icones
import iconeWhatsApp from '../assets/whatsapp (1).png'
import iconeLinkedin from '../assets/linkedin.png'
import iconeGitHub from '../assets/github.png'
import iconeGmail from '../assets/gmail (1).png'
import imgProgramer from '../assets/imagem-perfil-programador.jpeg'

// import habilidades
import iconeHtml5 from '../assets/logo-html5.jpeg'
import iconeCSS3 from '../assets/logo-css3.jpeg'
import iconeTypeScript from '../assets/logo-typescript.jpeg'
import iconeTailwindCSS from '../assets/logo-tailwindCSS.jpeg'
import iconeReact from '../assets/logo-react.jpeg'
import iconeNodeJs from '../assets/logo-nodejs.jpeg'
import iconePostgres from '../assets/logo-postgres.jpeg'
import iconeAPI from '../assets/logo-api-rest.jpeg'

function Home(){
    return(
        <>
            <Header></Header>
            <div className="container-content-home">
                <div className="container-bio">

                    <div className="container-img">
                        <img src={imgPerfil} alt="" id="img-perfil-home" />
                    </div>

                    <div className="container-sobre">
                        <p className="description"> 
                            
                            Sejam Bem-vindo(a) ao meu Perfil.<br></br><br></br>
                            Por aqui compartilho um pouco sobre mim.
                            Minhas experiências, habilidades, projetos e meios de entrar em contato!
                        </p>
                        <p className="description-react"> Portfólio construido em REACT </p>
                        <div className="container-redes">
                            <ul className="navigation-home">
                                <li className="">
                                    <a href="https://wa.me/5511963063466">
                                        <img src={iconeWhatsApp} alt=""  id="img-icons-home"/>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.linkedin.com/in/nathan-cruz-2025b9186/">
                                        <img src={iconeLinkedin} alt="" id="img-icons-home"/>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="">
                                        <img src={iconeGmail} alt="" id="img-icons-home"/>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://github.com/eunathan098">
                                        <img src={iconeGitHub} alt="" id="img-icons-home"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-sobre-home">
                    <div className="container sobre">
                        <img src={imgProgramer} alt="imgProgramer" id="img-perfil-home"/>
                        <div className="container-txt">
                            <p className="txt">
                            Olá, muito prazer, sou o Nathan!  😉 <br></br><br></br>

                            Desenvolvedor Full Stack atualmente estudando Análise e Desenvolvimento de Sistemas
                            e com cursos complementares de especialização na área de TI.<br></br>

                            👨‍💻 Minhas competências técnicas entre outras incluem:<br></br><br></br>
                            <div className="container-habilidades">
                                <img src={iconeHtml5} alt="Html5" className="icons-hardskills"/>
                                <img src={iconeCSS3} alt="CSS3" className="icons-hardskills"/>
                                <img src={iconeTypeScript} alt="TypeScript" className="icons-hardskills"/>
                                <img src={iconeTailwindCSS} alt="TailwindCSS" className="icons-hardskills"/>
                            </div>

                            <div className="container-habilidades">
                                <img src={iconeReact} alt="ReactJS" className="icons-hardskills"/>
                                <img src={iconeNodeJs} alt="NodeJs" className="icons-hardskills"/>
                                <img src={iconePostgres} alt="Postgres" className="icons-hardskills"/>
                                <img src={iconeAPI} alt="API" className="icons-hardskills"/>
                            </div>
                            
                            Tenho experiência em suporte técnico, gestão de projetos e desenvolvimento de software.
                            Atuei com treinamentos, apresentações e atendimento a usuários, oferecendo suporte técnico e garantindo o bom funcionamento de sistemas.<br></br><br></br>

                            Com desenvolvimento de software, trabalhei no back-end, utilizando tecnologias como TypeScript, Node.js e PostgreSQL para criação de APIs RESTful.
                            Em minha última experiência, atuei como Auxiliar de projetos, sendo responsável pela criação de planilhas e apresentações, além de prestar suporte técnico e conduzir apresentações do ERP Protheus.<br></br>
                            <br></br>
                            Tenho me aprofundado em ferramentas do back-end, como Node.js, TypeScript, PostgreSQL e APIs RESTful, enquanto mantenho uma base sólida em HTML5, CSS3, React, JavaScript e TailwindCss no Front-end.<br></br>

                            Se você busca um profissional completo, focado em inovação, estou à disposição:<br></br><br></br>

                            </p>
                            <div className="container-txt-contact">
                                <p className="txt-contact">
                                    📧 nathandasilva1891@gmail.com <br></br>
                                    🌐 https://eunathan098.github.io/React-Portfolio-V1/ <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Home