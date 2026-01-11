import { Link } from "react-router-dom";
import { useMyContext } from "../Global/Global";
import { useState } from "react";
function TitleBar(){
    const {username,setUsername,userId,setUserId} = useMyContext();
    const [statisticsContentVisible,setstatisticsContentVisible] = useState(false);
    const [logoutContentVisible,setLogoutContentVisible] = useState(false);
     
    const logOut = () =>{
        setUsername(null);
        setUserId(null);
    }

    const showLogoutContent = ()=>{
        setLogoutContentVisible(true);
    }

    const showStatisticsContent = ()=>{
        setstatisticsContentVisible(true);
    }


    return(
        <div className="title_bar">
            <div className="logo_content">
                <Link to="/" className="logo">Achievement Financing</Link>
            </div>

            
            <div className="title_content">

                <div className="statistics_content">
                    <div className="drop_content" onClick={showStatisticsContent}>
                        <p className="quick_link">Statisitics</p>
                        <p>▾</p>
                    </div>
                    <div className={statisticsContentVisible?"statistics_drop_content--active":"statistics_drop_content"}>  
                        <Link to= {username?"/queries":"/authentication"} className="quick_link">Queries</Link>
                        <Link to= {username?"/achievements":"/authentication"}  className="quick_link">Achievements</Link>
                    </div>
                    
                </div>
                
                
                <Link to={username?"/transactions":"/authentication"} className="quick_link">Transactions</Link>
                <Link to={username?"/plans":"/authentication"} className="quick_link">Plans</Link>
            </div>

            <div className="get_started_content">
                
                    {username?
                    <div className="drop_content" onClick={showLogoutContent}>
                        <p>{username}</p>
                        <p>▾</p>
                    </div>
                    :<Link to="/authentication" className="quick_link">{"Get Started"}</Link>}
                    
                <div onClick={logOut} className={username && logoutContentVisible?"logout_content--active":"logout_content"}>
                    <p>Log Out</p>
                </div>
            </div>
            

        </div>
    )
}
export default TitleBar;

