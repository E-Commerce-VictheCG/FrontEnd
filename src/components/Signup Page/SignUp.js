import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp=()=>{
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    }, [navigate])
    
    
    const collectData= async ()=> {
        console.warn([name, email, password])
        let data = await fetch("http://localhost:5000/auth/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await data.json();
        console.table(data);
        localStorage.setItem("user",JSON.stringify(data));
        navigate("/");

    }
    

    return (
        <div className="register">
            <div className='head'>
                <div className='spacee'></div>
                <h2>Register</h2>
                <Link to={"/Login"}><h5>Login</h5></Link>
            </div>
            <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input className="inputBox" type="password" placeholder="Enter Password" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
            <button className="inputButt" type="button" onClick={() =>{collectData()}}>Sign Up</button>
        </div>
    )
}

export default SignUp