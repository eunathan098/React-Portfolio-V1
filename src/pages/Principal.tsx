import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/Principal.css";
import imgPerfil from '../assets/nathanlogo.png';
import logoGithub from '../assets/github.png';
import logoWhatsApp from '../assets/whatsapp (1).png';

function Principal() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleClick() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }

  

  return (
    <>
      <div className="container-content">
        <div className="container-header-navigation">
      <ul className="navigation-principal">
        <li>
          <a href="https://github.com/eunathan098" target="_blank" rel="noopener noreferrer">
            <img src={logoGithub} alt="GitHub" id="logos-header" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5511963063466" target="_blank" rel="noopener noreferrer">
            <img src={logoWhatsApp} alt="WhatsApp" id="logos-header" />
          </a>
        </li>
      </ul>   
        </div>

        <div className="container">
          <img src={imgPerfil} alt="logo-perfil" id="img-perfil" />
          <h1 className="title"> <span> Nathan </span> Cruz </h1>
          <h2 className="subtitle"> Desenvolvedor Web </h2>
        </div>

        <button 
          className={loading ? "loading" : ""} 
          onClick={handleClick} 
          disabled={loading}
        >
          {loading ? "Carregando..." : "Perfil"}
        </button>
      </div>
    </>
  );
}

export default Principal;
