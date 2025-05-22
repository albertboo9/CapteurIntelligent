//Importation de feuille de styles
import {useEffect, useRef, useState} from "react";
import "../../styles/Header/MenuPhone.css";
import {Link, useNavigate} from "react-router-dom";

function MenuPhone({index=0}){
    const refMenu=useRef(null)
    const [isOpen,setIsOpen]=useState(false)
    const annimate=()=>{

        if (isOpen){
            console.log(isOpen)
            setIsOpen(false)
            refMenu.current.style.display="none"
            refMenu.current.style.animationName=""
        }
        else{
            console.log(isOpen)
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
    const navigate = useNavigate();
    useEffect(()=>{
        const logOutBtn=document.getElementById("logOutBtnPhone")
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
    return <div className="menu-phone">
        <div className="bx bx-menu" onClick={annimate}></div>
        <div className="menu-popup" ref={refMenu}>
            {nav.map((elt, x) => {
                return (
                    <div className={"nav-home  "+actualPage(x)} key={x}>
                        <Link to={elt.link} key={x}>
                            <div className={elt.icon}></div>
                            {elt.name}
                        </Link>
                    </div>
                );
            })}
            <div className="log-out" id="logOutBtnPhone">
                <Link to="/">Log out</Link>
            </div>
        </div>


    </div>
}

export default MenuPhone