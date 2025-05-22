import TemplateDoc from "../../pages/TemplateDoc";
import presenceImage from "../../asset/images/HC-SR501-removebg-preview.png"


function PresenceDoc(){
    const information={
        name:"PIR Sensor",
        documentation:{
            p1:"Les capteurs PIR sont couramment utilisés dans les alarmes de sécurité et les applications d’éclairage automatique.\n" +
                "\n" +
                "Les capteurs PIR détectent un mouvement général, mais ne donnent pas d’informations sur qui ou quoi a bougé. Pour cela, un capteur IR d’imagerie est nécessaire.",
            p2:"Tous les objets dont la température est supérieure au zéro absolu émettent de l’énergie thermique sous forme de rayonnement électromagnétique. Habituellement, ce rayonnement n’est pas visible à l’œil humain car il rayonne à des longueurs d’onde infrarouges, mais il peut être détecté par le capteur de mouvement.",
            p3:"Le capteur de mouvement comporte deux fentes, chaque fente est constituée d’un matériau spécial sensible aux infrarouges. Lorsque le capteur est inactif, les deux fentes détectent la même quantité d’IR, la quantité ambiante émise depuis la pièce. Lorsqu’un corps chaud comme un humain ou un animal passe, il intercepte d’abord une moitié du capteur de mouvement, ce qui provoque un changement différentiel positif entre les deux moitiés. Lorsque le corps chaud quitte la zone de détection, l’inverse se produit, le capteur générant un changement différentiel négatif. Ces impulsions de changement sont ce qui est détecté."
        },
        image:presenceImage
    }
    return <TemplateDoc name={information.name} image={information.image} documentation={information.documentation}/>
}

export default PresenceDoc