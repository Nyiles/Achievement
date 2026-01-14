import AchievementProgression from "../Components/Achievements/AchievementProgression";
import BottomBar from "../Components/BottomBar";
import TitleBar from "../Components/TitleBar";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../Global/Global";
import { useEffect } from "react";



function Achievements(){

    const {userId} = useMyContext();

    const navigate = useNavigate();

    useEffect(()=>{
        if(!userId){
            navigate("/authentication")
        }
    },[userId])
    return(
        <>
            <TitleBar/>
            <AchievementProgression/>
            <BottomBar/>
        </>
    );
}
export default Achievements