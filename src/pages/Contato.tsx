import Footer from "../components/Footer";
import Header from "../components/Header";
import './Contato.css';

// Importações de Imagens
import iconeWhatsApp from '../assets/whatsapp (1).png'
import iconeLinkedin from '../assets/linkedin.png'
import iconeGitHub from '../assets/github.png'
import iconeGmail from '../assets/gmail (1).png'

function Contato() {
  return (
    <>
      <Header />
      <div className="container-content-contato">
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
          </div><br></br>
        <div className="container-form">
          <div className="container-form-header">
            <h1>Entre em contato</h1>
          </div>
          <form
            action="https://formsubmit.co/devnathan2025@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            
            <input type="hidden" name="_next" value="https://eunathan098.github.io/React-Portfolio-V1/" />

            {/* Nome */}
            <label htmlFor="nome">
              <div className="name-input">
                <span>Nome:</span>
              </div>
            </label>
            <input type="text" id="nome" name="nome" placeholder="Digite o seu nome..." required/><br></br>

            <label htmlFor="email">
              <div className="name-input">
                <span>Email:</span>
              </div>
            </label>
            <input type="email" id="email" name="email" placeholder="Digite o seu melhor e-mail..." required/><br></br>

            <label htmlFor="mensagem">
              <div className="name-input">
                <span>Deixe sua mensagem:</span>
              </div>
            </label>
            <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem..." required>


            </textarea>
            <button type="submit" id="btn-enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contato;