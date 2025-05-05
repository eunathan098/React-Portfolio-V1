import './NavBar.css';
import logoPerfil from '../assets/logo-perfil.png';
// import Principal from '../pages/Principal';
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
        </div>
    )
}
export default NavBar