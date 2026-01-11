import {  useState } from "react";
import { useMyContext } from "../../Global/Global";
import { json } from "react-router-dom";

function Authorization(){
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [existingUsername, setExistingUsername] = useState("");
    const [existingPassword, setExistingPassword] = useState("");

    const [users,setUsers] = useState(null);

    const [isRegistering, setIsRegistering] = useState(false);

    const[isLoggingIn, setIsLoggingIn] = useState(true);

    const {userId,setUserId,username,setUsername} = useMyContext();


    return (
        <div className="authorization_container">
            <Authorize newUsername={newUsername} newPassword={newPassword} setNewUsername={setNewUsername} setNewPassword = {setNewPassword} isRegistering={isRegistering} setIsRegistering={setIsRegistering} existingUsername ={existingUsername} setExistingUsername = {setExistingUsername} setExistingPassword ={setExistingPassword} existingPassword = {existingPassword} isLoggingIn ={isLoggingIn} setIsLoggingIn = {setIsLoggingIn} users = {users} setUsers = {setUsers} userId={userId} setUserId={setUserId} username ={username} setUsername = {setUsername}/>
        </div>
            
    )
}



function Authorize({newUsername, newPassword,setNewUsername,setNewPassword, isRegistering, setIsRegistering,existingUsername,existingPassword,setExistingUsername,setExistingPassword, isLoggingIn, setIsLoggingIn,users,setUsers, setUserId,username ,setUsername}){


    const createNewUser = () =>{
        const user = {
            username:newUsername,
            password:newPassword
        };

        if (user.username !=="" || user.password !==""){
            setIsRegistering(true);
            try{
                fetch("http://localhost:8080/users/register",{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(user)
                }).then(() =>{
                    setIsRegistering(false);
                })
            }
            catch(error){
                setIsRegistering(false);
            }
        }
        else{
            console.log("empty String")
        }
    }
    /*
    useEffect(()=>{
        fetch("http://localhost:8080/users/all")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setUsers(data);
        })
    },[])
    */
    const login = ()=>{

         const user = {
            username:existingUsername,
            password:existingPassword
        };

        fetch("http://localhost:8080/users/login",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            return res.json();
        })
        .then(
            data => {
                setUsername(data.username);
                setUserId(data.userId);
        })

        
        /*
        users.map((user,i)=>{
            if ( existingUsername == user.username && existingPassword == user.password){
                setUserId(user.userId);
                setUsername(user.username)
            }
        })
            */
    }

    return(
        <div className="authorization_content">
            {isLoggingIn? 
            <>
                <h3>Log In</h3>
                <input type="text" required placeholder="username..." value={existingUsername} onChange={(e) =>{setExistingUsername(e.target.value)}}/>
                <input type="password" required placeholder="password..." value = {existingPassword} onChange={(e) =>{setExistingPassword(e.target.value)}}/>
                <button onClick={login}>{'enter'}</button>
                <p>Dont have an account? Click below!</p>
                <button onClick={()=>{setIsLoggingIn(false)}}>Create a New Account</button>
            </>
            
            :
            <>
                <h3>Create Account</h3>
                <input type="text" required placeholder="username..." value={newUsername} onChange={(e) =>{setNewUsername(e.target.value)}}/>
                <input type="password" required placeholder="password..." value = {newPassword} onChange={(e) =>{setNewPassword(e.target.value)}}/>
                <button onClick={createNewUser}>{isRegistering?'adding user...':'enter'}</button>
                <p>Already have an account? Click below!</p>
                <button onClick={()=>{setIsLoggingIn(true)}}>Log into Account</button>
            </>
            
            }
            
        </div>
    )
}




export default Authorization;