import TitleBar from "../Components/TitleBar";
import UserInput from "../Components/Transactions/UserInput";
import BottomBar from "../Components/BottomBar"
import Greeting from "../Components/Home/Greeting";
function Home() {
    return (
        <div className="home_container">  
            <TitleBar/>
            <Greeting/>
            <BottomBar/>
        </div>
    );
};

export default Home