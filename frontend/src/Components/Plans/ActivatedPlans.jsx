import { useState } from "react"
import durationSymbol from '../../assets/duration_icon.png';
import { useMyContext } from "../../Global/Global";
function ActivatedPlans(){
    const [hasCurrent,setHasCurrent] = useState(true);
    const [archiveAmount,setArchiveAmount] = useState([1,2,3,4,5]);
    
    return(
        <div>
            <h1>Activated Plans</h1>
            <h3>Current Plan</h3>
            <CurrentPlan hasCurrent={hasCurrent}/>
            <h3>Archived Plans</h3>

            <div className="archived_content">
                <ArchivedPlans archiveAmount={archiveAmount}/>
            </div>

            
            
        </div>
    )
}

function CurrentPlan({hasCurrent}){
    return(
        <div className="current_content">
            {hasCurrent ?
                <div className="saving_plans">
                    <p>Extreme Saving</p>
                    <div className="duration_content">
                        <p>Duration:</p>
                        <div className="duration_content_split">
                            <p>One Year</p>
                            <img className ="duration_symbol"src={durationSymbol}></img>
                        </div>
                    </div>
                            
                        <button className="plan_button">More Info</button>
                </div>
            :
            <p>No Plan Currently Selected...</p>}
        </div>
    )
}

function ArchivedPlans({archiveAmount}){
    return(

        archiveAmount.map((_,index)=>{
            return(
                <div className="archived_plans">
                    <p>Extreme Saving</p>
                    <div className="duration_content">
                        <p>Duration:</p>
                        <div className="duration_content_split">
                            <p>One Year</p>
                            <img className ="duration_symbol"src={durationSymbol}></img>
                        </div>
                    </div>
                            
                        <button className="plan_button">More Info</button>
                </div>
            )
        })

)
}


export default ActivatedPlans