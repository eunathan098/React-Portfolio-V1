import Footer from "../components/Footer"
import Header from "../components/Header"
import './Projetos.css';

// Import de imagens
import bannerVeterinariaLP from '../assets/banner-veterinaria.png'
import bannerCoffeCode from '../assets/banner-coffecode.png'
import bannerSistemFinancer from '../assets/bannerSistemFinancer.png';
import bannerSistemUsers from '../assets/bannerSistemUserPRO.png';

function Projetos(){
    return(
        <>
            <Header></Header>
            <div className="container-projetos-content">
                <div className="container-projetos">
                   <div className="projeto">
                      <img src={bannerVeterinariaLP} alt="" className="bannerWebsite"/>

                      <div className="container-acessos">
                        <a href="https://veterinaria-lp.vercel.app/" id="acessos"> Acessar </a>
                        <a href="https://github.com/eunathan098/Veterinaria-LP" id="acessos"> Código </a>
                      </div>
                   
                   </div>

                   <div className="projeto">
                   <img src={bannerCoffeCode} alt="" className="bannerWebsite"/>

                    <div className="container-acessos">
                        <a href="https://coffecode1.vercel.app/" id="acessos"> Acessar </a>
                        <a href="https://github.com/eunathan098/CoffeCode-LP" id="acessos"> Código </a>
                    </div>

                   </div>
                </div>

                <div className="container-projetos">
                   <div className="projeto" id="inDeveloper">
                   <img src={bannerSistemFinancer} alt="" className="bannerWebsite"/>

                    <div className="container-acessos">
                        <a href="#" id="acessos"> Acessar </a>
                        <a href="#" id="acessos"> Código </a>
                    </div>

                   </div>

                   <div className="projeto" id="inDeveloper">
                   <img src={bannerSistemUsers} alt="" className="bannerWebsite"/>

                    <div className="container-acessos">
                        <a href="#" id="acessos"> Acessar </a>
                        <a href="#" id="acessos"> Código </a>
                    </div>

                   </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Projetos