import BottomBar from "../Components/BottomBar";
import SavingPlans from "../Components/Plans/SavingPlans";
import TitleBar from "../Components/TitleBar";
import ActivatedPlans from "../Components/Plans/ActivatedPlans";

function Plans(){
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