//Importattion de feuille de style
import "../../styles/Aside/Aside.css";

//importation de hook et autre
import logoWithName from "../../asset/images/logo_avec_titre-removebg-preview.png";

function Aside({index=0}){
    //fonction pour remarquer l'onglet qui represent la page actuel
    const actualPage=(i)=>{
        if (i===index){
            return "actual-page" 
        } else {return ""}
    }
    const nav=[
        {
            name:"Dashboard",
            icon:"bx  bx-home"
        },
        {
            name:"Temperature",
            icon:"bx  bxs-thermometer"
        },
        {
            name:"Sound",
            icon:"bx bx-headphone"
        },
        {
            name:"Presence",
            icon:"bx  bx-globe"
        },
    ]
    return (<aside>
        <img src={logoWithName} alt="logo" />
        {nav.map((elt, i) => {
            return (
                <div className={"nav-home  "+actualPage(i)} key={i} id={"nav"+i} >
                    <div className={elt.icon}></div>
                    {elt.name}
                </div>
            );
        })}


    </aside>);
}

export default Aside