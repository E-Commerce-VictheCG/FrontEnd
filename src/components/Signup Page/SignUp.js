import { useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
const SignUp=()=>{
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()
    
    const collectData= async ()=> {
        console.warn([name, email, password])
        let data = await fetch("http://localhost:5000/register", {
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
    
    // let valChange = (e) => {
    //    onchange=()=>{setname(e.target.value)};
    //    onchange=()=>{setemail(e.target.value)};
    //    onchange=()=>{setpassword(e.target.value)};

    // }
    // let buttonClick = () => {
    //     valChange()
    //     let changes = ()=>{
    //         console.log(name)
    //         console.log(email)
    //         console.log(password)
    //     }
    //     changes()
    // }
    return (
        <div className="register">
            <h2>Register</h2>
            <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input className="inputBox" type="password" placeholder="Enter Password" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
            <button className="inputButt" type="button" onClick={() =>{collectData()}}>Sign Up</button>
        </div>
    )
}

export default SignUp