import {createContext,useContext,useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({children}) =>{
    const [userId,setUserId] = useState(null);
    const [username,setUsername] = useState(null);
    return(
        <MyContext.Provider value ={{userId,setUserId,username,setUsername}}> 
            {children}
        </MyContext.Provider>
    );
    
};