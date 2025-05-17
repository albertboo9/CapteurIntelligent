//importation de feuile de style
import "../styles/Log/Log.css";

//importation de composant
import Field from "../component/Log/Field";

//importation de hook et images
import background from "../asset/images/robot.webp"
import logo from "../asset/images/Logo_sans_nom-removebg-preview.png"
import { userVerif } from "../database/userVerif";

function Log(){

    const submit=(e)=>{
        e.preventDefault()
        const username=document.getElementById("username")
        const password=document.getElementById("password")
        userVerif(username.value,password.value,"http://localhost:8000")
        .then(estReconnue=>{
            console.log(estReconnue)
        })
        .catch(erreur => {
        console.error('Une erreur s\'est produite lors de la vérification:', erreur);
        });

    }
    return <>
        <main id="logPage">
            <img src={background} className="main-image" alt="" />
            <section className="form colum-div">
                <div className="head-form">
                    <img src={logo}  alt="logo" />
                    <h1>Bienvenue sur All connect</h1>
                    
                </div>
                <form className="colum-div">
                    <Field label="Username" classIco="bx bx-user" name="username" ></Field>
                    <Field label="Password" classIco="bx bx-lock" name="password" ></Field>
                    <span> Mot de passe oublié</span>
                    
                    <button type="submit" onClick={submit}>
                        Connection 
                    </button>
                    <p>
                        Pas de compte ?  Alors <span>Inscrivez-vous?</span>
                    </p>
                    
                </form>
            </section>
        </main>
    </>
}

export default Log