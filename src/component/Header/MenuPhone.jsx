//Importation de feuille de styles
import { useRef, useState } from "react";
import "../../styles/Header/MenuPhone.css";

function MenuPhone({index=0}){
    const refMenu=useRef(null)
    const [isOpen,setIsOpen]=useState(true)
    const annimate=()=>{
        if (isOpen){
            setIsOpen(false)
            refMenu.current.style.display="none"
            refMenu.current.style.animationName=""
        }
        else{
            setIsOpen(true)
            refMenu.current.style.display="flex"
            refMenu.current.style.animationName="menu-annimation"
        }
    }
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
    return <div className="menu-phone">
        <div className="bx bx-menu" onClick={annimate}></div>
        <div className="menu-popup" ref={refMenu}>
            {nav.map((elt, x) => {
                return (
                    <div className={"nav-home  "+actualPage(x)} key={x}>
                        <div className={elt.icon}></div>
                        {elt.name}
                    </div>
                );
            })}
        </div>

    </div>
}

export default MenuPhone