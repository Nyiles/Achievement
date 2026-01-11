import { useState,useEffect} from "react";
import { useMyContext } from "../../Global/Global";

function AchievementProgression(){
    const {userId} = useMyContext();
    const [transactionHistory,setTransactionHistory] = useState([]);
    const [depositTotal,setDepositTotal] = useState(null);

    const [percentages_1,setPercentages_1] = useState([0, 0, 0, 0]);
    const [percentages_2,setPercentages_2] = useState([0, 0, 0, 0]);
    const [percentages_3,setPercentages_3] = useState([0, 0, 0, 0]);
    const [percentages_4,setPercentages_4] = useState([0, 0, 0, 0]);

    const titles_1 = ["Deposit One","Deposit Two","Deposit Three","Deposit Four"];
    const titles_2 = ["Difference One","Difference Two","Difference Three","Difference Four"];
    const titles_3 = ["Nessecary One","Nessecary Two","Nessecary Three","Nessecary Four"];
    const titles_4 = ["Coming Soon...","Coming Soon...","Coming Soon...","Coming Soon..."];

    const description_1 = ["Deposit $100 total","Deposit $1,000 total","Deposit $10,000 total","Deposit $100,000 total"];
    const description_2 = ["Save $100","Save $1,000","Save $10,000","Save $100,000"];
    const description_3 = ["Withdrawl $100 worth for necessary reasons","Withdrawl $500 worth for necessary reasons","Withdrawl $1,000 worth for necessary reasons","Withdrawl $5,000 worth for necessary reasons"];
    const description_4 = ["?","?","?","?"];

     useEffect(()=>{
            
            fetch(`http://localhost:8080/transactions/getfromid?id=${userId}`,
                {
                    method: "GET",
                    headers: {"Content-Type":"application/json"},
                    
                })
                .then(
                    res=>{ 
                        return res.json();
                })
                .then(
                data=>{
                    
                    let totalDeposit = 0;
                    let totalDifference = 0;
                    let totalNecessary = 0;
                    data.map((item,index)=>{
                        if(item.type == "Deposit"){
                            totalDeposit += item.amount;
                            totalDifference += item.amount;
                        }
                        else if(item.type == "Withdrawl"){
                            totalDifference -= item.amount
                            if(item.necessityScale > 7.5){
                                totalNecessary += item.amount;
                            }
                        }
                        
                    })
                    setPercentages_1([(totalDeposit*100)/100,(totalDeposit*100)/1000,(totalDeposit*100)/10000,(totalDeposit*100)/100000])
                    setPercentages_2([(totalDifference*100)/100,(totalDifference*100)/1000,(totalDifference*100)/10000,(totalDifference*100)/100000])
                    setPercentages_3([(totalNecessary*100)/100,(totalNecessary*100)/1000,(totalNecessary*100)/10000,(totalNecessary*100)/100000])

              
                })
        },[userId])

    
    return(
        <div className="achievements_container">
            <h3>Achievements Progression</h3>
            <AchievementGrid percentage={percentages_1} title={titles_1} description={description_1}/>
            <AchievementGrid percentage={percentages_2} title={titles_2} description={description_2}/>
            <AchievementGrid percentage={percentages_3} title={titles_3} description={description_3}/>
            <AchievementGrid percentage={percentages_4} title={titles_4} description={description_4}/>
        </div>
    );
}

function AchievementGrid({percentage,title,description}){

    const achievement_objects = {
        title: title,
        description: description,
        percentage: percentage
    }
    return(
        <>
            
            <div className="achievements_content">
                {percentage.map((_,i)=>{
                return(
                    <div className="achievement">
                        <h3>{achievement_objects.title[i]}</h3>
                        <p>{achievement_objects.description[i]}</p>
                        <ProgressBar percentage={achievement_objects.percentage[i]}/>
                    </div>
                );
            })}
                
            </div>
        </>
            
         
    )
};
const getBarColor =(percentage)=>{
    if (percentage < 10){
        return "rgba(177, 0, 0, 1)";
    }
    else if (percentage >= 10 && percentage < 20){
        return "rgba(255, 0, 0, 1)";
    }
    else if (percentage >=20 && percentage < 30){
        return "rgba(255, 74, 0, 1)";
    }
    else if (percentage >= 30 && percentage < 40){
        return "rgba(255, 126, 0, 1)";
    }
    else if (percentage >= 40 && percentage < 50){
        return "rgba(255, 166, 0, 1)";
    }
    else if (percentage >= 50 && percentage < 60){
        return "rgba(255, 200, 0, 1)";
    }
    else if (percentage >= 60 && percentage < 70){
        return "rgba(255, 255, 0, 1)";
    }
    else if (percentage >= 70 && percentage < 80){
        return "rgba(212, 255, 0, 1)";
    }
    else if (percentage >= 80 && percentage < 90){
        return "rgba(131, 255, 0, 1)";
    }
    else if (percentage >= 90 && percentage < 100){
        return "rgba(0, 255, 0, 1)";
    }
    else{
        return "rgba(0, 255, 242, 1)";
    }
}

function ProgressBar({percentage}){
    return(
        <div className="progress_bar" style={{
            background: `linear-gradient(to right, ${getBarColor(percentage)} ${percentage}%,
            white ${percentage}%)`
        }}>
            {percentage<100?`${percentage}%`:"complete"}
        </div>
    )
}

export default AchievementProgression