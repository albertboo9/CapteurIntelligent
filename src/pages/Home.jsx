//importation des feuiles de styles
import "../styles/Home/Home.css";

// importation de composant
import Header from "../component/Header/Header";
import Aside from "../component/Aside/Aside";
import Dashboard from "../component/Dashboard/Dashboard";
import AudioDoc from "../component/TemplateDoc/AudioDoc";
import { useEffect, useState } from "react";
import TemperatureDoc from "../component/TemplateDoc/TemperatureDoc";
import PresenceDoc from "../component/TemplateDoc/PresenceDoc.jsx";
import {useLocation} from "react-router-dom";

function Home({index=0}){
   const information={
        status:true,
        numCaptor:4,
        time:10,
        temperature:35,
        noice:false,
        presence:false
    }
    const allComponent=[
        <Dashboard information={information}/>,
        <TemperatureDoc/>,
        <AudioDoc/>,
        <PresenceDoc/>
    ]
    const location=useLocation()
    console.log(location)
    const admin=location.state? location.state: {username:"admin"}
    return (<>
        <Header status={true} name={admin.username} index={index}/>
        <Aside index={index}/>
        <main id="home">
            {allComponent[index]}
        </main>
    </>);
}

export default Home