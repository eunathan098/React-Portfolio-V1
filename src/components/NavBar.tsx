import './NavBar.css';
import logoPerfil from '../assets/logo-perfil.png';
import iconMenuHamburguer from '../assets/menu-de-hamburguer.png';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className="container-navbar">
            <img src={logoPerfil} alt="logo-perfil" id='logo-perfil'/>
            <nav>
                <ul>
                    <li> <Link to="/home" className='navigation'> Home </Link> </li>
                    <li> <Link to="/projetos" className='navigation'> Projetos </Link> </li>
                    <li> <Link to="/contato" className='navigation'> Contato</Link> </li>
                </ul>
            </nav>
            <img src={iconMenuHamburguer} alt="icone-menu" id='menu-hamburguer'/>
        </div>
    )
}
export default NavBar