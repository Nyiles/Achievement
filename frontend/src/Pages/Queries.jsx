import BottomBar from "../Components/BottomBar"
import Statistics from "../Components/Queries/Statistics"
import TransactionHistory from "../Components/Queries/TransactionHistory"
import TitleBar from "../Components/TitleBar"
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../Global/Global";
import { useEffect } from "react";

function Queries(){
    const {userId} = useMyContext();
    
        const navigate = useNavigate();
    
        useEffect(()=>{
            if(!userId){
                navigate("/authentication")
            }
        },[userId])
    return(
        <div>
            <TitleBar/>
            <Statistics/>
            <TransactionHistory/>
            <BottomBar/>
        </div>
    )
}

export default Queries