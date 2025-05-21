import TemplateDoc from "../../pages/TemplateDoc";
import audioImage from "../../asset/images/capteur-de-son-removebg-preview.png"
import AudioVisualizer from "../Dashboard/AudioVisualizer";

function AudioDoc(){
    const information={
        name:"KY-038",
        documentation:{
            p1:"Le capteur de son est un module de microphone à condensateur, souvent utilisé pour détecter et mesurer des niveaux sonores. La sensibilité du capteur peut être réglée à l’aide d’un potentiomètre.",
            p2:"Ce capteur est parfaitement adapté à la mesure de seuils. Cela signifie que le capteur émet un signal numérique dès qu’une valeur seuil définie par l’utilisateur est dépassée.",
            p3:"Ce capteur possède trois composants fonctionnels  : détection située à l’avant du module, qui mesure l’environnement actuel et le transmet sous forme de signal analogique à l’amplificateur. Celui-ci amplifie le signal en fonction de la résistance réglée sur le potentiomètre rotatif et l’envoie à la sortie analogique du module."
        },
        image:audioImage
    }
    return <TemplateDoc name={information.name} image={information.image} documentation={information.documentation}>
        <AudioVisualizer/>
    </TemplateDoc>
}

export default AudioDoc