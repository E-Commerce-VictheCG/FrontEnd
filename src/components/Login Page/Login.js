import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
const Login=()=> {
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    const handleLogin= async ()=> {
        console.warn([email, password])
        let data = await fetch("http://localhost:5000/auth/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await data.json();
        console.table(data);
        localStorage.setItem("user",JSON.stringify(data));
        navigate("/");

    }

    return(
        <div className="login">
            <div className='head'>
                <div className='spacee'></div>
                <h2>Login</h2>
                <Link to={"/signup"}><h5>Register</h5></Link>
            </div>
            <input className="login_input" type="email" placeholder="Enter Email" value={email} onChange={(e) =>{setemail(e.target.value)}}/>
            <input className="login_input" type="password" placeholder="Enter Password" value={password} onChange={(e) =>{setpassword(e.target.value)}}/>
            <button className="inputButt" type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login