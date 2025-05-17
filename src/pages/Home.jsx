//importation des feuiles de styles
import "../styles/Home/Home.css";

// importation de composant
import Header from "../component/Header/Header";
import Aside from "../component/Aside/Aside";
import Dashboard from "../component/Dashboard/Dashboard";
import AudioDoc from "../component/TemplateDoc/AudioDoc";
import { useEffect, useState } from "react";
import TemperatureDoc from "../component/TemplateDoc/TemperatureDoc";

function Home(){
    const information={
        status:true,
        numCaptor:4,
        time:10,
        temperature:35,
        noice:false,
        presence:false
    }
    
    const allIndex=[
        {
            id:"nav0",
            index:0
        },
        {
            id:"nav1",
            index:1
        },
        {
            id:"nav2",
            index:2
        },
        {
            id:"nav3",
            index:3
        }
    ]
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        allIndex.forEach(element => {
            let x=document.getElementById(element.id)
            x.addEventListener("click",()=>{
                setIndex(element.index)
            })
        });
    },[])

    const allComponent=[
        <Dashboard information={information}/>,
        <TemperatureDoc/>,
        <AudioDoc/>
    ]
    return (<>
        <Header status={true} />
        <Aside index={index}/>
        <main id="home">
            {allComponent[index]}
        </main>
    </>);
}

export default Home