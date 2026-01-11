import { useState ,useEffect } from "react";
import { useMyContext } from "../../Global/Global";

function UserInput(){

    const [dollarAmount, setDollarAmount] = useState("0");
    const [centAmount, setCentAmount] = useState("00");
    const [transactionType, setTransactionType] = useState("Deposit");
    const [withdrawlReason,setWithdrawlReason] = useState(null);
    const [necessityScale,setNecessityScale] = useState(null);
    const [transactionDay, setTransactionDay] = useState(null);
    const [transactionMonth,settransactionMonth] = useState(null);
    const [transactionYear,settransactionYear] = useState(null);

    const [buttonClick, setButtonClick] = useState(true);
    const [lastTransaction, setLastTransaction] = useState("");
    const [transactionHistory,setTransactionHistory] = useState([]);

    const {userId} = useMyContext();
    
    const handleTransactionTypeChange = (type) =>{
        setTransactionType(type);
    }

    useEffect(()=>{
        
        fetch(`http://localhost:8080/transactions/getfromid?id=${userId}`,
            {
                method: "GET",
                headers: {"Content-Type":"application/json"},
                
            })
            .then(
                res=>{ 
                    return res.json()
            })
            .then(
            data=>{
                if(data.length > 10){
                    let tenEntries = []
                    for (let i = data.length-1 ; i > data.length-11 ; i-- ){
                        tenEntries.push(data[i]);
                    }
                    setTransactionHistory(tenEntries);
                }
                else{
                    setTransactionHistory([...data].reverse());
                }
               
               console.log(data)
            })
    },[userId,buttonClick])

    const tempHandleSubmit = () =>{
        const currentTime = new Date();
        const transactionDate = new Date(transactionYear,transactionMonth-1,transactionDay);

        const transaction = {
            type: transactionType,
            amount: `${dollarAmount}.${centAmount}`,
            inputDate: currentTime,
            userId:userId,
            transactionDate:transactionDate,
            withdrawlReason:withdrawlReason ,
            necessityScale:necessityScale
        } 

        console.log(transactionDate)
        console.log(currentTime)
        fetch("http://localhost:8080/transactions/save",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(transaction)
        })
        .then( () =>{
            setButtonClick(prev => !prev)
         }
        )
    }

    const deleteEntry = (id)=>{
        fetch(`http://localhost:8080/transactions/delete?id=${id}`,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        }).then(()=>{
            setButtonClick(prev => !prev)
            }
        )
    }
    
    return(
        <div className="input_container">


            <div className="input_content">   
                <h1> Make Transaction</h1>
                <h3>Transaction Type</h3>

                <div className="input_group">

                    <div className="transaction_input">
                        <input type="radio" value="Deposit" checked = {transactionType === "Deposit"} onChange={()=>{handleTransactionTypeChange("Deposit")}}/>
                        <p>Deposit</p>
                    </div>

                    <div className="transaction_input">   
                        <input type="radio" value= "Withdrawl" checked = {transactionType === "Withdrawl"} onChange={()=>{handleTransactionTypeChange("Withdrawl")}}/>
                        <p>Withdrawl</p>
                    </div>
                    

                </div>
                <h3>{transactionType === "Deposit"? "Deposit Amount":"Withdrawl Amount"}</h3>
                <div className="amount_content">
                    <p>$</p>
                    <input value={dollarAmount} onChange={e=> setDollarAmount(e.target.value)}/>
                    <p className="decimal">.</p>
                    <input value={centAmount} onChange={e=> setCentAmount(e.target.value)}/>
                </div>

                <h3>Date of Transaction</h3>
                <div className="amount_content">
                    <p></p>
                    <input type="text" placeholder="DD" value={transactionDay} onChange={e=> setTransactionDay(e.target.value)}/>
                    <p className="decimal">/</p>
                    <input type="text" placeholder="MM" value={transactionMonth} onChange={e=> settransactionMonth(e.target.value)}/>
                    <p className="decimal">/</p>
                    <input type="text" placeholder="YYYY" value={transactionYear} onChange={e=> settransactionYear(e.target.value)}/>
                </div>

                <div className={transactionType === 'Withdrawl'?'withdrawl_drops_active':'withdrawl_drops_dormant'}>
                    <h3>Reason for withdrawl</h3>
                    <input value = {withdrawlReason} onChange={(e)=>{setWithdrawlReason(e.target.value)}}/>
                    <h3>{"Nesessity Scale (1-10)"}</h3>
                    <input value = {necessityScale} onChange={(e)=>{setNecessityScale(e.target.value)}}/>
                </div>
                <button onClick={tempHandleSubmit}>submit</button>
                <></>
            </div>

                
            <div className="ten_history_content">
                <h1>Recent Transaction History</h1>
                {transactionHistory? transactionHistory.map((item,index)=>{
                    return(
                        <p key={index} className="transaction_index" onClick={()=>{deleteEntry(item.id)}}>
                            {index < 10
                                ? `${index + 1}. Transaction: ${item.type}, Amount: $${item.amount}, Input Date: ${item.inputDate}`
                                + (item.withdrawlReason ? `, Withdrawal Reason: ${item.withdrawlReason}` : "")
                                + (item.necessityScale ? `, Necessity Scale: ${item.necessityScale}` : "")
                                : ""
                            }
                        </p>
                    );
                    
                }):<></>}
            </div>


        </div>
    );
}
export default UserInput