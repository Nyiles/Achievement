import { useMyContext } from "../../Global/Global";
import { useEffect, useState } from "react";
function TransactionHistory(){
    const {userId} = useMyContext();
    const [fullTransactions, setFullTransactions] = useState([]);
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
                            let modifyData = data;
                            modifyData.map((item,index)=>{
                                if(item.necessityScale == null){
                                    item.necessityScale = "N/A";
                                }
                                if(item.withdrawlReason == null){
                                    item.withdrawlReason= "N/A";
                                }
                            })
                            setFullTransactions(data);
                            console.log(data)
        
                        })
                },[userId])
        
    return(
        <div className="history_container">
            <h3>Full Transaction History</h3>
            <div className="history_content">
                <div className="entry_content">
                    <h5>transaction Type</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>{index+1}.{item.type}</p>);
                    })}
                </div>
                <div className="entry_content">
                    <h5>Amount</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>${item.amount}</p>);
                    })}
                </div>
                <div className="entry_content">
                    <h5>Transfer Date</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>{item.transactionDate}</p>);
                    })}
                </div>
                <div className="entry_content">
                    <h5>Input Date</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>{item.inputDate}</p>);
                    })}
                </div>
                <div className="entry_content">
                    <h5>Reason for Withdrawl</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>{item.withdrawlReason}</p>);
                    })}

                </div>
                <div className="entry_content">
                    <h5>Withdrawl Necessity Scale</h5>
                    {fullTransactions.map((item,index)=>{
                        return(<p>{item.necessityScale}</p>);
                    })}
                </div>
                
               
            </div>
        </div>
    );
}

export default TransactionHistory