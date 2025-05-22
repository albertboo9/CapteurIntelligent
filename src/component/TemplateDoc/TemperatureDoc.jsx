import TemplateDoc from "../../pages/TemplateDoc";
import audioImage from "../../asset/images/dht11-removebg-preview.png"
import TemperatureVisualiser from "../Dashboard/TemperatureVisualiser.jsx";


function TemperatureDoc(){
    const information={
        name:"KY-038",
        documentation:{
            p1:"Le capteur numérique de température et d’humidité DHT11 est un capteur composite qui contient une sortie de signal numérique calibrée de la température et de l’humidité. La technologie des modules numériques dédiés et la technologie de détection de température et d’humidité sont appliquées pour garantir que le produit a une haute fiabilité et une excellente stabilité à long terme.",
            p2:"Le capteur comprend un composant de détection d’humidité résistif et un dispositif de mesure de température NTC, et est connecté à un microcontrôleur 8 bits haute performance.",
            p3:"Seules trois broches sont disponibles pour l’utilisation : VCC, GND et DATA. Le processus de communication commence par la ligne DATA envoyant des signaux de départ au DHT11, et le DHT11 reçoit les signaux et retourne un signal de réponse. Ensuite, l’hôte reçoit le signal de réponse et commence à recevoir les données d’humiture de 40 bits (8 bits d’humidité entière + 8 bits d’humidité décimale + 8 bits de température entière + 8 bits de température décimale + 8 bits de somme de contrôle)."
        },
        image:audioImage
    }
    return <TemplateDoc name={information.name} image={information.image} documentation={information.documentation}>
        <TemperatureVisualiser></TemperatureVisualiser>
    </TemplateDoc>
}

export default TemperatureDoc