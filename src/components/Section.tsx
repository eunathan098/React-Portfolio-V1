import imagemPerfil from '../assets/PhotoRoom_20220918_192135 - Copia.jpg';
import './Section.css';


function Section(){
    return(
        <>
            <div className="container-section-primary">

                <div className="container-left">
                    <img src={imagemPerfil} alt="" id='imagem-perfil'/>
                </div>

                <div className="container-right">
                    <p> teste </p>
                </div>
            </div>

            <div className="container-section-primary">

            <div className="container-right">
                    <p> teste </p>
                </div>
                
                <div className="container-left">
                    <img src={imagemPerfil} alt="" id='imagem-perfil'/>
                </div>

                
            </div>
    
        </>
    )
}
export default Section