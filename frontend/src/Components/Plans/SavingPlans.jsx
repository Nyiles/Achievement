import { useEffect, useState } from "react";
import { useMyContext } from "../../Global/Global";
import durationSymbol from '../../assets/duration_icon.png';
function SavingPlans(){
    
    const{userId} = useMyContext();

    const [showExplanation,setShowExplanation] = useState(false);
    const [blocker,setBlocker] = useState(false);
    const [explanationTime,setExplanationTime] = useState("");
    const [explanationTitle,setExplanationTitle] = useState("");
    const [explanationDesc,setExplanationDesc] = useState("");
    const [explanationSave,setExplanationSave] = useState("");
    const [explanationSpend,setExplanationSpend] = useState("");


    return(
        <div>
            <h1>Saving Plans</h1>

            <h3>Short Term Plans</h3>
            <ShortPlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime} setExplanationDesc = {setExplanationDesc} setExplanationSave = {setExplanationSave} setExplanationSpend= {setExplanationSpend}/>
            
            <h3>Long Term Plans</h3>
            <LongPlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime} setExplanationDesc = {setExplanationDesc} setExplanationSave = {setExplanationSave} setExplanationSpend= {setExplanationSpend}/>
            
            <h3>Indefinite Plans</h3>
            <IndefinitePlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime} setExplanationDesc = {setExplanationDesc} setExplanationSave = {setExplanationSave} setExplanationSpend= {setExplanationSpend}/>
            <PlanExplanation  userId={userId} showExplanation = {showExplanation} setShowExplanation= {setShowExplanation} explanationTitle={explanationTitle} explanationTime={explanationTime} explanationDesc = {explanationDesc} explanationSave = {explanationSave} explanationSpend= {explanationSpend}/>
            
        </div>
    )
}


function LongPlansGrid({setShowExplanation,setBlocker,setExplanationTitle,setExplanationTime,setExplanationDesc,setExplanationSave,setExplanationSpend}){


    const longDescriptions = ["Take saving to the extreme! Attempt to save at least 90% of your income and spend only up to 10% for a whole year.","A step down from extreme saving, but still high saving, attempt to save at least 70% of your income and spend up to 30% for a whole year.","A half and half general saving plan. Attempt to save at least 50% of your income and spend up to 50% for a whole year."," A lower metric of saving, attempt to save at least 30% of your income and spend up to 70% for a whole year."];
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("One Year Saving Plan");
            if (title == 0){
                setExplanationTitle("Extreme Saving");
                setExplanationSave(90);
                setExplanationSpend(10);
                setExplanationDesc(longDescriptions[0]);
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
                setExplanationSave(70);
                setExplanationSpend(30);
                setExplanationDesc(longDescriptions[1]);
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
                setExplanationSave(50);
                setExplanationSpend(50);
                setExplanationDesc(longDescriptions[2]);
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
                setExplanationSave(30);
                setExplanationSpend(70);
                setExplanationDesc(longDescriptions[3]);
            }
    }
    return(
        <div className="saving_plans_content">
            <div className="saving_plans">
                <p>Extreme Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Year</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                
                <button className="plan_button" onClick={()=>{changeExplanation(0)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>High Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Year</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                
                <button className="plan_button" onClick={()=>{changeExplanation(1)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Half/Half saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Year</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                
                <button className="plan_button" onClick={()=>{changeExplanation(2)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Modest Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Year</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                
                <button className="plan_button" onClick={()=>{changeExplanation(3)}}>More Info</button>
            </div>
        </div>
            
    );
}



function ShortPlansGrid({setShowExplanation,setBlocker, setExplanationTitle, setExplanationTime,setExplanationDesc,setExplanationSave,setExplanationSpend}){
    const shortDescriptions = ["Take saving to the extreme! Attempt to save at least 90% of your income and spend only up to 10% for a month.","A step down from extreme saving, but still high saving, attempt to save at least 70% of your income and spend up to 30% for a month.","A half and half general saving plan. Attempt to save at least 50% of your income and spend up to 50% for a month."," A lower metric of saving, attempt to save at least 30% of your income and spend up to 70% for a month."];
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("One Month Saving Plan");
        if (title == 0){
                setExplanationTitle("Extreme Saving");
                setExplanationSave(90);
                setExplanationSpend(10);
                setExplanationDesc(shortDescriptions[0]);
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
                setExplanationSave(70);
                setExplanationSpend(30);
                setExplanationDesc(shortDescriptions[1]);
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
                setExplanationSave(50);
                setExplanationSpend(50);
                setExplanationDesc(shortDescriptions[2]);
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
                setExplanationSave(30);
                setExplanationSpend(70);
                setExplanationDesc(shortDescriptions[3]);
            }
    }
    return(
        <div className="saving_plans_content">
            <div className="saving_plans">
                <p>Extreme Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Month</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(0)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>high Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Month</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(1)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Half/Half Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Month</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(2)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Modest Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>One Month</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(3)}}>More Info</button>
            </div>
        </div>
            
    );
}

function IndefinitePlansGrid({setShowExplanation,setBlocker, setExplanationTime, setExplanationTitle,setExplanationDesc,setExplanationSave,setExplanationSpend}){
    const infiniteDescriptions = ["Take saving to the extreme! Attempt to save at least 90% of your income and spend only up to 10% for as long as possible.","A step down from extreme saving, but still high saving, attempt to save at least 70% of your income and spend up to 30% for as long as possible.","A half and half general saving plan. Attempt to save at least 50% of your income and spend up to 50% for as long as possible."," A lower metric of saving, attempt to save at least 30% of your income and spend up to 70% for as long as possible."];
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("Infinite Saving Plan");
        if (title == 0){
                setExplanationTitle("Extreme Saving");
                setExplanationSave(90);
                setExplanationSave(10);
                setExplanationDesc(infiniteDescriptions[0]);
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
                setExplanationSave(70);
                setExplanationSpend(30);
                setExplanationDesc(infiniteDescriptions[1]);
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
                setExplanationSave(50);
                setExplanationSpend(50);
                setExplanationDesc(infiniteDescriptions[2]);
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
                setExplanationSave(30);
                setExplanationSpend(70);
                setExplanationDesc(infiniteDescriptions[3]);
            }
    }
    return(
        <div className="saving_plans_content">
            <div className="saving_plans">
                <p>Extreme Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>Infinite</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                
                <button className="plan_button" onClick={()=>{changeExplanation(0)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>High Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>Infinite</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(1)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Half/Half Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>Infinite</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(2)}}>More Info</button>
            </div>
            <div className="saving_plans">
                <p>Modest Saving</p>
                <div className="duration_content">
                    <p>Duration:</p>
                    <div className="duration_content_split">
                        <p>Infinite</p>
                        <img className ="duration_symbol"src={durationSymbol}></img>
                    </div>
                </div>
                <button className="plan_button" onClick={()=>{changeExplanation(3)}}>More Info</button>
            </div>
        </div>
            
    );
}

function PlanExplanation({userId,showExplanation ,setShowExplanation, explanationTitle, explanationTime, explanationDesc, explanationSave,explanationSpend}){


    console.log(userId)
    const saveNewPlan = ()=>{
        
        const newDate = new Date();
        const savingPlan = {
            userId: userId,
            startDate: newDate,
            duration: explanationTime,
            savePercentage: explanationSave,
            spendPercentage: explanationSpend,
            isActive : true,
        }

        fetch(`http://localhost:8080/savingplans/allbyid?id=${userId}`,{
            method: "GET",
            headers: {"Content-Type":"application/json"},
        }).then(
            res =>res.json()
        ).then(
            data =>{
                const checkList = data.filter(item=>item.isActive);
                if(checkList.length == 0){
                    return fetch("http://localhost:8080/savingplans/new",{
                        method: "POST",
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify(savingPlan)
                    })
                }
            }
        )
    } 
    

    showExplanation? document.body.style.overflow = "hidden":document.body.style.overflow = "auto"
    return(
        <>
        
            <div className= {showExplanation ? "explanation_content explanation_content--active":"explanation_content"}>
                <div className="explanation_close" onClick={()=>{setShowExplanation(false)}}>
                    <span className="explanation_close_left"></span>
                    <span className="explanation_close_right"></span>
                </div>
                <h3>{explanationTitle}</h3>
                <h3>{explanationTime}</h3>
                <p>{explanationDesc}</p>
                <div>
                    <p>save: {explanationSave}</p>
                    <p>spend: {explanationSpend}</p>
                </div>
                <button onClick={saveNewPlan}>Chose Plan</button>
            </div>
            <div className= {showExplanation ? "blocker blocker--active":"blocker"}>
                    
            </div>
        </>
        
    )
}


export default SavingPlans;