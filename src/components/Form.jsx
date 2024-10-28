import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const updateUsername = (e) =>{
        setUsername(e.target.value);
        
    }
    const updatePassword = (e) =>{
        setPassword(e.target.value);
        
    }
    const ps = "password"



    return ( <div>
        <form>
            <div className="input-wrap">
                <label htmlFor="">Username</label>
                <input name="username"  onChange={(e) =>{setUsername(e.target.value)}} />
            </div>

            <div className="input-wrap">
                <label htmlFor="">Password</label>
                <input name="password" type={ps} onChange={(e) =>{setPassword(e.target.value)}} />
            </div>

            <button>Submit</button>
            
            <h2>Form values</h2>
            <p>username: {username}</p> 
            <p>password: {password}</p>
        </form>
    </div> );
}
 
export default Form;