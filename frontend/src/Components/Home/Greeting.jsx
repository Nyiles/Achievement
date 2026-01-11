import { useMyContext } from "../../Global/Global";

function Greeting(){
    const{username} = useMyContext();

    return(
        <div className="page_content">
            <Greet username = {username}/>
        </div>
    );
}
export default Greeting;

function Greet({username}){
    return(
        <>
            <h2> {username? `Welcome Back ${username}`: "Welcome user"} </h2>
            <div>
                  <p>The goal of this website is to encourage users to keep track of their finances and reach their goals by "gamifying" the process</p>
                  <p>The user inputs their widrawls and deposits, and we provide achievements for the user to reach along with statistics of their transactions, to encourage good habits.</p>
                  <button>Get Started</button>
            </div>
          

        </>
        
    );
}