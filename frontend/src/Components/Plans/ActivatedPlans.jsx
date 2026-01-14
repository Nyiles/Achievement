import { useState,useEffect } from "react"
import { useMyContext } from "../../Global/Global";
import durationSymbol from '../../assets/duration_icon.png';

function ActivatedPlans(){
    
    const {userId} = useMyContext();
    const [archivePlanList,setArchivePlanList] = useState(null);
    const [currentPlan,setCurrentPlan] = useState(null);
    const [isCurrent, setIsCurrent] =useState(true);

    const [showExplanation,setShowExplanation] = useState(false);
    const [explanationStartTime,setExplanationStartTime] = useState("");
    const [explanationEndTime,setExplanationEndTime] = useState("");
    const [explanationTitle,setExplanationTitle] = useState("");
    const [explanationDuration,setExplanationDuration] = useState("");
    const [explanationSave,setExplanationSave] = useState("");
    const [explanationSpend,setExplanationSpend] = useState("");


    console.log(showExplanation)

      useEffect(()=>{
            fetch(`http://localhost:8080/savingplans/allbyid?id=${userId}`,{
                method: "GET",
                headers: {"Content-Type":"application/json"}
            }).then(
                res => res.json()
            ).then(
                data =>{

                    let archive = data.filter(item =>!item.isActive);
                    let current = data.find(item =>item.isActive);
                    if(data.length > 0){
                        setCurrentPlan(current); 
                    }
                    if(data.length > 1){
                        setArchivePlanList(archive);
                    }
                    
                }
            )
        },[])
    
    return(
        <div>
            <h1>Activated Plans</h1>
            <h3>Current Plan</h3>
            <CurrentPlan setIsCurrent={setIsCurrent} currentPlan = {currentPlan} setShowExplanation={setShowExplanation} setExplanationStartTime = {setExplanationStartTime} setExplanationDuration = {setExplanationDuration} setExplanationEndTime={setExplanationEndTime} setExplanationTitle={setExplanationTitle} setExplanationSave={setExplanationSave} setExplanationSpend={setExplanationSpend}/>
            <h3>Archived Plans</h3>

            {archivePlanList ?
            <div className="archived_content">
                <ArchivedPlans setIsCurrent={setIsCurrent} archivePlanList={archivePlanList} setShowExplanation={setShowExplanation} setExplanationStartTime = {setExplanationStartTime} setExplanationDuration = {setExplanationDuration} setExplanationEndTime={setExplanationEndTime} setExplanationTitle={setExplanationTitle} setExplanationSave={setExplanationSave} setExplanationSpend={setExplanationSpend}/>
            </div>
            :
            "No Archived Plans..."}

            <PlanExplanation isCurrent={isCurrent} userId = {userId} showExplanation = {showExplanation} setShowExplanation={setShowExplanation} explanationTitle ={explanationTitle} explanationStartTime ={explanationStartTime}explanationEndTime ={explanationEndTime} explanationSave = {explanationSave} explanationSpend ={explanationSpend} explanationDuration = {explanationDuration}/>
            

            
            
        </div>
    )
}

export default ActivatedPlans

function CurrentPlan({setIsCurrent,currentPlan,setShowExplanation,setExplanationStartTime,setExplanationDuration,setExplanationEndTime,setExplanationTitle,setExplanationSave,setExplanationSpend}){

    const changeExplanation = (startTime,duration,endtime,title,save,spend)=>{
        setShowExplanation(true);
        setExplanationStartTime(startTime);
        setExplanationDuration(duration);
        setExplanationEndTime(endtime);
        setExplanationTitle(title);
        setExplanationSave(save);
        setExplanationSpend(spend);
        setIsCurrent(true);
    }

    const titleConversion = (save) =>{
        if (save == 90){
            return "Extreme Saving"
        }
        if (save == 70){
            return "High Saving"
        }
        if (save == 50){
            return "Half Saving"
        }
        if (save == 30){
            return "Modest Saving"
        }
    }

    return(
        <div className="current_content">
            {currentPlan?
                <div className="saving_plans">
                    <p>{titleConversion(currentPlan.savePercentage)}</p>
                    <div className="duration_content">
                        <p>Duration:</p>
                        <div className="duration_content_split">
                            <p>{currentPlan.duration}</p>
                            <img className ="duration_symbol"src={durationSymbol}></img>
                        </div>
                    </div>
                        
                        <button className="plan_button" onClick={()=>{changeExplanation(currentPlan.startDate,currentPlan.duration,"hi",titleConversion(currentPlan.savePercentage),currentPlan.savePercentage,currentPlan.spendPercentage)}}>More Info</button>
                </div>
            :
            <p>No Plan Currently Selected...</p>}
        </div>
    )
}

function ArchivedPlans({setIsCurrent,archivePlanList,setShowExplanation,setExplanationStartTime,setExplanationDuration,setExplanationEndTime,setExplanationTitle,setExplanationSave,setExplanationSpend}){

    const changeExplanation = (startTime,duration,endtime,title,save,spend)=>{
        setShowExplanation(true);
        setExplanationStartTime(startTime);
        setExplanationDuration(duration);
        setExplanationEndTime(endtime);
        setExplanationTitle(title);
        setExplanationSave(save);
        setExplanationSpend(spend);
        setIsCurrent(false);
    }

    const titleConversion = (save) =>{
        if (save == 90){
            return "Extreme Saving"
        }
        if (save == 70){
            return "High Saving"
        }
        if (save == 50){
            return "Half Saving"
        }
        if (save == 30){
            return "Modest Saving"
        }
    }

    return(
        archivePlanList.map((item,index)=>{
            return(
                <div className="archived_plans">
                    <p>{titleConversion(item.savePercentage)}</p>
                    <div className="duration_content">
                        <p>Duration:</p>
                        <div className="duration_content_split">
                            <p>{item.duration}</p>
                            <img className ="duration_symbol"src={durationSymbol}></img>
                        </div>
                        
                    </div>
                            
                        <button className="plan_button" onClick={()=>{changeExplanation(item.startDate,item.duration,"hi",titleConversion(item.savePercentage),item.savePercentage,item.spendPercentage)}}>More Info</button>
                </div>
            )
        })
        

)
}

function PlanExplanation({userId,isCurrent, showExplanation ,setShowExplanation, explanationTitle, explanationStartTime,explanationEndTime,explanationSave,explanationSpend}){

    const cancel =()=>{
         fetch(`http://localhost:8080/savingplans/archive?id=${userId}`,{
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            })
    }

    return(
        <>
            <div className= {showExplanation ? "explanation_content explanation_content--active":"explanation_content"}>
                <div className="explanation_close" onClick={()=>{setShowExplanation(false)}}>
                    <span className="explanation_close_left"></span>
                    <span className="explanation_close_right"></span>
                </div>
                <h3>{explanationTitle}</h3>
                <h3>{explanationStartTime}</h3>
                <h3>{explanationEndTime}</h3>
                <div>
                    <p>save: {explanationSave}</p>
                    <p>spend: {explanationSpend}</p>
                </div>
                {isCurrent?<button className="cancel_plan_button" onClick={()=>{cancel()}}>Cancel</button> :<></>}
            </div>
            <div className= {showExplanation ? "blocker blocker--active":"blocker"}>
                    
            </div>
        </>
    );
}

