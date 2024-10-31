import { useEffect, useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [studentData, setStudentData] = useState([])

    const [boynames, setBoynames] = useState([
        {name: "ife", gender: "m"}, 
        {name: "ope", gender: "m"},
        {name: "ola", gender: "m"},
        {name: "ade", gender: "m"},

        
    ])

    useEffect(()=>{
        alert("welcome😊")
    },[studentData])

    const postData = (e) => {
        e.preventDefault()
        setStudentData([...studentData, {username, password}])
        setUsername("")
        setPassword("")
    }
    // const updateUsername = (e) =>{
    //     setUsername(e.target.value);
        
    // }
    // const updatePassword = (e) =>{
    //     setPassword(e.target.value);
        
    // }
    const ps = "password"

        console.log(studentData);
        

    return ( <div>
        <form>
            <div className="input-wrap">
                <label htmlFor="">Username</label>
                <input name="username" value={username} onChange={(e) =>{setUsername(e.target.value)}} required />
            </div>

            <div className="input-wrap">
                <label htmlFor="">Password</label>
                <input name="password" type={ps} value={password} onChange={(e) =>{setPassword(e.target.value)}} />
            </div>

            <button onClick={postData}>Submit</button>
            
            <h2>Form values</h2>
            <p>username: {[studentData.length-1].username}</p> 
            <p>password: {[studentData.length-1].password }</p>
        </form>
          

    </div> );
}
 
export default Form;