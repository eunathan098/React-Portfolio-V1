import Footer from "../components/Footer"
import Header from "../components/Header"

// import CSS
import './Contato.css';

function Contato(){
    return(
        <>
          <Header></Header>
            <div className="container-content-contato">
              <div className="container-form">

                <div className="container-form-header">
                  <h1> Entre em contato </h1>
                </div>
                
                  <form action="">
                    <label>
                      <div className="name-input">
                        <span> nome: </span>
                      </div>
                      <input type="text" placeholder="Digite o seu nome..."/>
                    </label>

                    <label>
                    <div className="name-input">
                        <span> email: </span>
                      </div>
                      <input type="email" placeholder="Digite o seu melhor e-mail..."/>
                    </label>

                    <label>
                    <div className="name-input">
                        <span> Deixe sua mensagem: </span>
                      </div>
                      <textarea>


                      </textarea>
                    </label>
                  </form>
                  <input type="submit" id="btn-enviar"/>
              </div>
            </div>
          <Footer></Footer>
        </>
    )
}
export default Contato