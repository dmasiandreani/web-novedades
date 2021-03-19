import logoError from '../../assets/img/error.png'
import "./style.css"

export default function FourOfour(){
    return(
        <div className="main-container">
            <h1>Error de Direccionamiento!!</h1>
            <img src={logoError} alt="logo"/>
        </div>
    );
}