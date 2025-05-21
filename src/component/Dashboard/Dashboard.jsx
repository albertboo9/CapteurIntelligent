//imporation de feuilles de styles
import "../../styles/Dashboard/Dashboard.css";

//Importation de composant 
import HeadDashboard from "./HeadDashboard";
import AudioVisualizer from "./AudioVisualizer";
import TemperatureVisualiser from "./TemperatureVisualiser";

function Dashboard({information}){
    return (<section className="dashboard">
        <HeadDashboard status={information.status} time={information.time} numCaptor={information.numCaptor}/>
        <AudioVisualizer/>
        <TemperatureVisualiser/>
    </section>);
}

export default Dashboard