import './Login.css'
import { Link } from 'react-router-dom'
const Login=()=> {

    return(
        <div className="login">
            <div className='head'>
                <div className='spacee'></div>
                <h2>Login</h2>
                <Link to={"/signup"}><h5>Register</h5></Link>
            </div>
            <input className="login_input" type="email" placeholder="Enter Email"/>
            <input className="login_input" type="password" placeholder="Enter Password"/>
            <button className="inputButt" type="button" >Login</button>
        </div>
    )
}

export default Login