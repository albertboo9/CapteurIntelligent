//Importation de feuille de style
import "../../styles/Dashboard/TemplateInfo.css";

//importation de composant
import {Link} from "react-router-dom";

function TemplateInfo({image,mesure,value,captor}){
    return <div className="template-info">
        <img src={image} alt="image"/>
        <div>{mesure}</div>
        <div className="view-value">{value} </div>
        <div className="captor-name">Captor Name :{captor}</div>
        <Link to="/home">Plus d'information</Link>
    </div>
}

export default TemplateInfo