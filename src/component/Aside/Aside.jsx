//Importattion de feuille de style
import "../../styles/Aside/Aside.css";

//importation de hook et autre
import logoWithName from "../../asset/images/logo_avec_titre-removebg-preview.png";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Aside({index=0}){
    //fonction pour remarquer l'onglet qui represent la page actuel
    const actualPage=(i)=>{
        if (i===index){
            return "actual-page" 
        } else {return ""}
    }
    const navigate = useNavigate();
    useEffect(()=>{
        const logOutBtn=document.getElementById("logOutBtn")
        logOutBtn.addEventListener("click",()=>{
            navigate("/",{})
        })
    },[])
    const nav=[
        {
            name:"Dashboard",
            icon:"bx  bx-home",
            link:"/home"
        },
        {
            name:"Temperature",
            icon:"bx  bxs-thermometer",
            link:"/temperature"
        },
        {
            name:"Sound",
            icon:"bx bx-headphone",
            link:"/sound"
        },
        {
            name:"Presence",
            icon:"bx  bx-globe",
            link:"/presence"
        },
    ]
    return (<aside>
        <img src={logoWithName} alt="logo" />
        {nav.map((elt, i) => {
            return (
                <div className={"nav-home  "+actualPage(i)} key={i}>
                    <Link to={elt.link} key={i}>
                        <div className={elt.icon}></div>
                        {elt.name}
                    </Link>
                </div>

            );
        })}
    <div className="log-out" id="logOutBtn">
        <Link to="/">Log out</Link>
    </div>

    </aside>);
}

export default Aside