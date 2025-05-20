//importation de feuile de style
import "../styles/Log/Log.css";

//importation de composant
import SignUp from "../component/Log/SignUp";
import SignIn from "../component/Log/SignIn";

//importation de hook et images
import background from "../asset/images/robot.webp"
import logo from "../asset/images/Logo_sans_nom-removebg-preview.png"
import { userVerif } from "../database/userVerif";
import {useEffect, useState} from "react";

function Log(){
    const [isSignUp,setIsSignUp]=useState(false)
    useEffect(() => {
        //Gestion de l'annimation de passage du sign in au sign up et visce versa
        const goToSignUp=document.querySelector("form #goToSignUp")
        const goToSignIn=document.querySelector("form #goToSignIn")
        const formSignIn=document.querySelector("#formSignIn")
        const formSignUp=document.querySelector("#formSignUp")
        goToSignUp.addEventListener("click",()=>{
            setIsSignUp(true)
            formSignUp.style.animationName="moveSignUp"
            formSignIn.style.animationName="none"
        })
        goToSignIn.addEventListener("click",()=>{
            setIsSignUp(false)
            formSignUp.style.animationName="none"
            formSignIn.style.animationName="moveSignIn"
        })

        //rendre les password visible au survol
        const password=document.querySelectorAll("form input[type=password]")
        password.forEach(element => {
            element.addEventListener("mouseover",()=>{
                element.type="text"
            })
            element.addEventListener("mouseout",()=>{
                element.type="password"
            })
        });
    }, []);

    return <>
        <main id="logPage">
            <img src={background} className="main-image" alt="" />
            <section className="form colum-div">
                <div className="head-form">
                    <img src={logo}  alt="logo" />
                    <h1>Bienvenue sur All connect</h1>
                    
                </div>
                     <SignUp visibility={isSignUp}/>  <SignIn visibility={!isSignUp}/>
            </section>

        </main>
    </>
}

export default Log