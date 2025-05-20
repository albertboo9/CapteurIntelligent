//importation de composant
import Field from "./Field";

//importation de hook et autre
import { userVerif } from "../../database/userVerif";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignIn({visibility=false}){
    const server="http://localhost:8000" // ceci sera modifie par l'integreur
    const [error,setError]=useState(false)
    const navigate=useNavigate()
    const submit=(e)=>{
        e.preventDefault()
        const username=document.getElementById("usernameIn")
        const password=document.getElementById("passwordIn")
        userVerif(username.value,password.value,server)
        .then(estReconnue=>{
            if (estReconnue){
                setError(false)
                navigate('/home', {
                    replace: true,
                    state: {
                        username: username.value //Pour pouvoir partager les donnée enregistre
                    }
                })
            }
            else{
                setError(true)
            }
        })
        .catch(erreur => {
        console.error('Une erreur s\'est produite lors de la vérification:', erreur);
        });

    }
    return <form className="colum-div" id="formSignIn" style={visibility? {display:"flex"}: {display:"none"}}>
        <Field label="Username" classIco="bx bx-user" name="usernameIn" typeInput="text" error={error}></Field>
        <Field label="Password" classIco="bx bx-lock" name="passwordIn" typeInput="password" error={error}></Field>
        {error?<p style={{color:"var(--error-color)"}}>Information erroné</p>:""}
        <button type="submit" onClick={submit}>
            Connection
        </button>
        <p>
            Pas de compte ?  Alors <span id="goToSignUp">Inscrivez-vous?</span>
        </p>

    </form>
}

export default SignIn