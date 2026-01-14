import Authorization from "../Components/Authentication/Authorization"
import BottomBar from "../Components/BottomBar"
import TitleBar from "../Components/TitleBar"


function Authentication(){
    return(
        <div className="authentication_container">
            <TitleBar/>
            <Authorization/>
            <BottomBar/>
        </div>
    )
}

export default Authentication