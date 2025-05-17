//Importation de styles
import "../../styles/Dashboard/HeadDashboard.css";

function HeadDashboard({status=false,time=10,numCaptor=4}){
    return <section className="head-dashboard">
        <div className="action-dashboard">
            <div className="head-text">Action</div>
            {status?                
            <button className="no-connect">
                < i class='bx  bx-wifi'></i> 
                Disconnection
            </button>
            :
            <button className="yes-connect">
                < i class='bx  bx-plug-connect'></i> 
                Connection
            </button>}

            <button className="refresh-btn">
                < i class='bx  bxs-refresh-cw-alt'  ></i> 
                Refresh
            </button>
        </div>
        <div className="head-info-dashboard">
            <div className="head-text">View tools</div>
            <div>
                <div className="info-box">
                    <div className="icon-info-box">< i class='bx  bx-wifi'></i> </div>
                    <div className="second-info-box">Status:</div>
                    {status===false?
                        <div className="main-info no-connect">Disconnected</div>
                    :
                        <div className="main-info yes-connect">Connected</div>
                    }

                </div>
                <div className="info-box">
                    <div className="icon-info-box">< i class='bx bxs-plug'  ></i>  </div>
                    <div className="second-info-box">Last-connection:</div>
                    <div className="main-info">{time} </div>
                </div>
                <div className="info-box">
                    <div className="icon-info-box">< i class='bx  bxs-cog'  ></i> </div>
                    <div className="second-info-box">Captor:</div>
                    <div className="main-info">{numCaptor} </div>
                </div>
            </div>
        </div>
    </section>
}
export default HeadDashboard