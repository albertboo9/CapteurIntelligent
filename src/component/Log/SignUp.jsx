

//importation de composant
import Field from "./Field";

//importation de hook et images
import { userVerif } from "../../database/userVerif";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {sender} from "../../database/sender.js";

function SignUp({visibility=false}){
    const server="http://localhost:8000" // Modifie par l'integreur
    const [error,setError]=useState(false)
    const navigate=useNavigate()
    const submit=(e)=>{
        e.preventDefault()
        const email=document.getElementById("email")
        const username=document.getElementById("username")
        const password=document.getElementById("password")
        userVerif(username.value,password.value,server)
        .then(estReconnue=>{
            if (estReconnue){
                setError(true)
            }
            else {
                setError(false)
                sender("post","http://localhost:8000/users",{
                    email:email.value,
                    username:username.value,
                    password:password.value
                }).then(response=>{
                    if (response.status===200){
                        console.log("ok")
                    }
                    if (response.status===201){
                        console.log("utilisateur ajouté")
                    }
                    else{
                        console.log("erreur")
                    }
                }).catch(error=>{
                    console.log(error)
                })
                navigate('/home', {
                    replace: true,
                    state: {
                        username: username.value //Pour pouvoir partager les donnée enregistre
                    }
                })
            }
        })
        .catch(erreur => {
        console.error('Une erreur s\'est produite lors de la vérification:', erreur);
        });

    }
    return <form className="colum-div" style={visibility? {display:"flex"}: {display:"none"}} id="formSignUp">
        <Field label="Email" classIco="bx bx-envelope" name="email" typeInput="text" error={error}></Field>
        <Field label="Username" classIco="bx bx-user" name="username" typeInput="text" error={error}></Field>
        <Field label="Password" classIco="bx bx-lock" name="password" typeInput="password" error={error}></Field>
        {error?<div style={{color:"var(--error-color)"}}>Compte existant</div>:""}
        <button type="submit" onClick={submit}>
            Sign In
        </button>
        <p>
            Deja un compte ?  Donc <span id="goToSignIn">Sign In </span>
        </p>
    </form>

}

export default SignUp