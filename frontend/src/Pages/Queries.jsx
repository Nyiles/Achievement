import BottomBar from "../Components/BottomBar"
import Statistics from "../Components/Queries/Statistics"
import TransactionHistory from "../Components/Queries/TransactionHistory"
import TitleBar from "../Components/TitleBar"

function Queries(){
    return(
        <div>
            <TitleBar/>
            <Statistics/>
            <TransactionHistory/>
            <BottomBar/>
        </div>
    )
}

export default Queries