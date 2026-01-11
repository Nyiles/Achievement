import { useState } from "react";
import durationSymbol from '../../assets/duration_icon.png';
function SavingPlans(){
    const [showExplanation,setShowExplanation] = useState(false);
    const [blocker,setBlocker] = useState(false);
    const [explanationTime,setExplanationTime] = useState("");
    const [explanationTitle,setExplanationTitle] = useState("");
    console.log(setShowExplanation)
    return(
        <div>
            <h1>Saving Plans</h1>

            <h3>Short Term Plans</h3>
            <ShortPlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime}/>
            
            <h3>Long Term Plans</h3>
            <LongPlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime}/>
            
            <h3>Indefinite Plans</h3>
            <IndefinitePlansGrid setShowExplanation={setShowExplanation} setBlocker={setBlocker} setExplanationTitle = {setExplanationTitle} setExplanationTime = {setExplanationTime}/>
            <PlanExplanation showExplanation = {showExplanation} setShowExplanation= {setShowExplanation} explanationTitle={explanationTitle} explanationTime={explanationTime} />
            
        </div>
    )
}


function LongPlansGrid({setShowExplanation,setBlocker,setExplanationTitle,setExplanationTime}){
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("One Year Saving Plan");
            if (title == 0){
                setExplanationTitle("Extreme Saving");
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
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



function ShortPlansGrid({setShowExplanation,setBlocker, setExplanationTitle, setExplanationTime}){
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("One Month Saving Plan");
        if (title == 0){
                setExplanationTitle("Extreme Saving");
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
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
                <p>Extreme Saving</p>
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
                <p>Extreme Saving</p>
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

function IndefinitePlansGrid({setShowExplanation,setBlocker, setExplanationTime, setExplanationTitle}){
    const changeExplanation = (title)=>{
        setShowExplanation(true);
        setBlocker(true);
        setExplanationTime("Infinite Saving Plan");
        if (title == 0){
                setExplanationTitle("Extreme Saving");
            }
            else if (title == 1){
                setExplanationTitle("High Saving");
            }
            else if (title == 2){
                setExplanationTitle("Half/Half");
            }
            else if (title == 3){
                setExplanationTitle("Modest Saving");
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

function PlanExplanation({showExplanation ,setShowExplanation, explanationTitle, explanationTime}){

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
            </div>
            <div className= {showExplanation ? "blocker blocker--active":"blocker"}>
                    
            </div>
        </>
        
    )
}


export default SavingPlans;