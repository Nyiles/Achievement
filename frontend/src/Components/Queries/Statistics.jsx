import Chart from "chart.js/auto"
import { useEffect, useState } from "react";
import {Bar,Doughnut} from "react-chartjs-2"
import { useMyContext } from "../../Global/Global";

function Statistics (){

    const {userId} = useMyContext();

    const [amounts,setAmounts] = useState([0,0,0]);
    const [counts,setCounts] = useState([0,0,0]);
    const [means,setmeans] = useState([0,0,0]);
    const [medians,setmedians] = useState([0,0,0]);

    function medianConvert(medianList){
        if(medianList.length == 0){
            return 0;
        }
        else if (medianList.length == 1){
            return medianList[0];
        }
        else if (medianList.length % 2 ==1){
            return medianList[Math.floor(medianList.length/2)];
        }
        else if (medianList.length % 2 == 0){
            return medianList[Math.floor((medianList.length-1)/2)] + medianList[Math.floor((medianList.length)/2)] / 2
        }
    }
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
                        
                        let depositAmount = 0;
                        let depositNumber = 0;
                        let depositMean = 0;
                        let depositMedian = 0;

                        let withdrawlAmount = 0;
                        let withdrawlNumber = 0;
                        let withdrawlMean = 0;
                        let withdrawlMedian = 0;

                        let totalAmount = 0;
                        let totalNumber = 0;
                        let totalMean = 0;
                        let totalMedian = 0;

                        let depositList=[];
                        let withdrawlList = [];
                        let totalList = [];

                        data.map((item,index)=>{
                            if(item.type == "Deposit"){
                                depositNumber+=1;
                                depositAmount += item.amount;
                                depositList.push(item.amount);
                            }
                            else if (item.type == "Withdrawl"){
                                withdrawlNumber+=1;
                                withdrawlAmount += item.amount;
                                withdrawlList.push(item.amount);
                            }
                            totalAmount += item.amount;
                            totalNumber += 1;
                            totalList.push(item.amount);
                      
                        })

                        depositList = depositList.sort();
                        withdrawlList = withdrawlList.sort();
                        totalList = totalList.sort();

                        depositMean = (depositAmount/depositNumber);
                        withdrawlMean = (withdrawlAmount/withdrawlNumber);
                        totalMean = (totalAmount/totalNumber);
                        
                        depositMedian = medianConvert(depositList);
                        withdrawlMedian = medianConvert(withdrawlList);
                        totalMedian = medianConvert(totalList);
                        
                        console.log(depositMedian)
                        console.log(withdrawlMedian)
                        console.log(totalMedian)

                        
                        setAmounts([totalAmount.toFixed(2),depositAmount.toFixed(2),withdrawlAmount.toFixed(2)]);
                        setCounts([totalNumber,depositNumber,withdrawlNumber]);
                        setmeans([totalMean.toFixed(2),depositMean.toFixed(2),withdrawlMean.toFixed(2)]);
                        setmedians([totalMedian.toFixed(2),depositMedian.toFixed(2),withdrawlMedian.toFixed(2)]);
    
                    })
            },[userId])
    

    return(
        <div className="statistics_container">
            <div className="numbers_container">
                <Numbers amounts = {amounts} counts={counts} means={means} medians ={medians}/>
            </div>
            
            <div className="charts_container">
                <Charts amounts = {amounts} counts={counts}/>
            </div>
         
        </div>
    )
}

function Numbers({counts,amounts,means,medians}){
    return(
        <>
            <div className="totals_content">
                <p>{`Total Transactions Count: ${counts[0]}`}</p>
                <p>{`Total Withdrawls Count: ${counts[2]}`}</p>
                <p>{`Total Deposits Count: ${counts[1]}`}</p>
            </div>
            <div className="totals_content">
                <p>{`Total Transactions Amount: $${amounts[0]}`}</p>
                <p>{`Total Withdrawls Amount: $${amounts[2]}`}</p>
                <p>{`Total Deposits Amount: $${amounts[1]}`}</p>
            </div>
            <div className="totals_content">
                <p>{`Total Transactions Mean: $${means[0]}`}</p>
                <p>{`Total Withdrawls Mean: $${means[2]}`}</p>
                <p>{`Total Deposits Mean: $${means[1]}`}</p>
            </div>

            <div className="totals_content">
                <p>{`Total Transactions Medians: $${medians[0]}`}</p>
                <p>{`Total Withdrawls Medians: $${medians[2]}`}</p>
                <p>{`Total Deposits Medians: $${medians[1]}`}</p>
            </div>
        </>
        

    )
}

function Charts({amounts,counts}){
    return(
        <>
            <div className="charts_content">
                <div className="bar_content">
                    <h3 className="chart_title">Number of Different Trasactions (By Type)</h3>
                    <div className="chart">
                        <Bar data = {{
                        labels : ["Transactions","Deposits","Withdrawls"],
                        datasets: [{
                        label: "Total Counts",
                        data: counts,
                        }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                        />
                    </div>
                    
                </div>
                    
                <div className="bar_content">
                    <h3 className="chart_title">Number of Different Transactions (By Type)</h3>
                    <div className="chart">
                        <Doughnut data = {{
                        labels : ["Transactions","Deposits","Withdrawls"],
                        datasets: [{
                        label: "Total Counts",
                        data: counts,
                        }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}/>
                    </div>
                    
                </div>
            
            </div>

             <div className="charts_content">

                <div className="bar_content">
                    <h3 className="chart_title">Amount of each transaction (By Type)</h3>
                    <div className="chart">
                        <Bar data = {{
                            labels : ["Transactions","Deposits","Withdrawls"],
                            datasets: [{
                            label: "Dollars",
                            data: amounts,
                        }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}/>
                    </div>
                    
                </div>
                    
                <div className="bar_content">
                    <h3 className="chart_title">Amount of each transaction (By Type)</h3>
                    <div className="chart">
                        <Doughnut data = {{
                        labels : ["Transactions","Deposits","Withdrawls"],
                        datasets: [{
                        label: "Dollars",
                        data: amounts,
                        }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                        />
                    </div>
                    
                    
                </div>
            
            </div>
        </>
    
        
    )
}

export default Statistics;