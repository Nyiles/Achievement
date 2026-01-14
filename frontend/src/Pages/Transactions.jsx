import TitleBar from "../Components/TitleBar";
import UserInput from "../Components/Transactions/UserInput";
import BottomBar from "../Components/BottomBar"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../Global/Global";

function Transactions() {
    const {userId} = useMyContext();
    
        const navigate = useNavigate();
    
        useEffect(()=>{
            if(!userId){
                navigate("/authentication")
            }
        },[userId])

    return (
        <div className="transactions_container">  
            <TitleBar/>
            <UserInput/>
            <BottomBar/>
        </div>
    );
};

export default Transactions