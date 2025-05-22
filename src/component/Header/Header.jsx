//Importation de feuilles de styles 
import "../../styles/Header/Header.css"
//Importation de composant
import MenuPhone from "./MenuPhone";

function Header({status=false,name="admin",index=0}){

    return (<header>
        
        <div>
            <div className="salutation">Hello, {name}</div>
            <div class='bx  bxs-user-circle'></div> 
        </div>

        {status==false?
            <div className="no-connect">You are not connected</div>
        :
            <div className="yes-connect">You are connected</div>
        }
        <MenuPhone index={index}/>
    </header>);
}

export default Header 