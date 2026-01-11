import TitleBar from "../Components/TitleBar";
import UserInput from "../Components/Transactions/UserInput";
import BottomBar from "../Components/BottomBar"
function Transactions() {
    return (
        <div className="transactions_container">  
            <TitleBar/>
            <UserInput/>
            <BottomBar/>
        </div>
    );
};

export default Transactions