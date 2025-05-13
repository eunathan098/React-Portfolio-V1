import Footer from "../components/Footer";
import Header from "../components/Header";
import './Contato.css';

function Contato() {
  return (
    <>
      <Header />
      <div className="container-content-contato">
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
            <input type="text" id="nome" name="nome" placeholder="Digite o seu nome..." required/>

            <label htmlFor="email">
              <div className="name-input">
                <span>Email:</span>
              </div>
            </label>
            <input type="email" id="email" name="email" placeholder="Digite o seu melhor e-mail..." required/>

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