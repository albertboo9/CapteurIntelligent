//imporation de feuilles de styles
import "../../styles/Dashboard/Dashboard.css";

//Importation de composant 
import HeadDashboard from "./HeadDashboard";
import AudioVisualizer from "./AudioVisualizer";
import TemperatureVisualiser from "./TemperatureVisualiser";
import TemplateInfo from "./TemplateInfo.jsx";

// importation des images
import termometer from "../../asset/images/termo-removebg-preview.png"
import casque from "../../asset/images/casque-removebg-preview.png"
import personnage from "../../asset/images/personnage-removebg-preview.png"

function Dashboard({information}){
    const smallInfo=[
        {
            name:"Temperature",
            value:information.temperature,
            image:termometer,
            captor:"DHT11"
        },
        {
            name:"Sound",
            value:information.noice?"sound":"no sound",
            image:casque,
            captor:"HR 07"
        },
        {
            name:"Presence",
            value:information.presence?"presence":"no presence",
            image:personnage,
            captor:"PIR "
        },
    ]
    return (<section className="dashboard">
        <HeadDashboard status={information.status} time={information.time} numCaptor={information.numCaptor}/>
        <div className="small-info-dashboard">
            {smallInfo.map((elt) => {
               return <TemplateInfo image={elt.image} mesure={elt.name} value={elt.value} captor={elt.captor} />
            })}
        </div>
        <AudioVisualizer/>
        <TemperatureVisualiser/>
    </section>);
}

export default Dashboard