import BottomBar from "../Components/BottomBar";
import SavingPlans from "../Components/Plans/SavingPlans";
import TitleBar from "../Components/TitleBar";
import ActivatedPlans from "../Components/Plans/ActivatedPlans";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../Global/Global";
import { useEffect } from "react";

function Plans(){
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
            <div className="plans_container">
                <ActivatedPlans/>
                <SavingPlans/>
            </div>
            
            <BottomBar/>
        </div>
    );
}

export default Plans;