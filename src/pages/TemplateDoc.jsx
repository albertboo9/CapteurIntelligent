//imporation de feuilles de sytles
import "../styles/AudioDoc/AudioDoc.css";

function TemplateDoc({name,image,documentation,children}){
    return <section className="audio-doc">
        <div className="info-captor">
            <img src={image} alt="" />
            <div className="main-info-tool">
                <div className="name-captor">
                    Name : {name}
                </div>
                <div className="introduction">
                    <p>
                        {documentation.p1}
                    </p>
                    <p>
                        {documentation.p2}
                    </p>
                    <p>
                        {documentation.p3}
                    </p>
                </div>
            </div>
        </div>
        {children? <>
                <h2>Mesure</h2>
                {children}
            </>
            :""}

    </section>
}
export default TemplateDoc