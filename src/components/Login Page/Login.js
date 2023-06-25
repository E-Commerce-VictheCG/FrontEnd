import { useState } from 'react'
import './Login.css'
const Login=()=> {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    return(
        <div className="login">
            <h2>Login</h2>
            <input className="login_input" type="email" placeholder="Enter Email"/>
            <input className="login_input" type="password" placeholder="Enter Password"/>
            <button className="inputButt" type="button" >Login</button>
        </div>
    )
}

export default Login