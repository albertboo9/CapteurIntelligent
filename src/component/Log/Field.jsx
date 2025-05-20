//Importation de feuille de style
import "../../styles/Log/Field.css";

//importation de hook et autre
import { useRef } from "react";

function Field({label,typeInput,classIco,name,error=false}){
    // Recupérer les noms balises html
    const labelRef=useRef(null)
    const inputRef=useRef(null)
    const lineRef=useRef(null)

//faire monter le label en haut
    const moveLabelToTop=()=>{
        labelRef.current.style.animation = "moveLabel 0.3s ease-in-out normal forwards";
    }

    //faire descendre le label
    const moveLabelToBottom=()=>{
        if (inputRef.current.value===""){
            labelRef.current.style.animation = "moveLabel 0.2s ease-in-out reverse forwards";
            labelRef.current.style.animationName = "none";
        }
    }
    //Modifier les champs instanement
    
    return (
    <div className="field">
        <div className="label-field" ref={labelRef}>{label}</div>
        <div className="for-user">
            <input type={typeInput} ref={inputRef} className="input-field" onClick={moveLabelToTop} onBlur={moveLabelToBottom} id={name} required/>
            <div className={classIco +" iconic"}></div>
        </div>
        <hr style={error? {backgroundColor:"var(--error-color)"}:{backgroundColor:"var(--primary-color)"}}/>
    </div>
    );
}
export default Field