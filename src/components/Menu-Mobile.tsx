import './Menu-Mobile.css';
import iconeMenuMobile from '../assets/menu-de-hamburguer.png';

function MenuMobile(){
    return(
        <>
            <div className="container-menu-mobile">
                <div className="container-navigation-mobile">
                    <div className="container-icon-menu">
                        <img src={iconeMenuMobile} alt="" id='icon-menu-mobile' />
                    </div>
                    <ul>
                        <li className=""> <a href="#"> Home </a></li>
                        <li className=""> <a href="#"> Projetos </a></li>
                        <li className=""> <a href="#"> Contato </a></li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}
export default MenuMobile