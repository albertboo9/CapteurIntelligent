//imporation de feuilles de styles
import "../../styles/Dashboard/Dashboard.css";

//Importation de composant 
import HeadDashboard from "./HeadDashboard";
import AudioVisualizer from "./AudioVisualizer";

function Dashboard({information}){
    return (<section className="dashboard">
        <HeadDashboard status={information.status} time={information.time} numCaptor={information.numCaptor}/>
        <AudioVisualizer/>
    </section>);
}

export default Dashboard