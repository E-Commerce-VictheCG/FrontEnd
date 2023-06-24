import './Login.css'
import SignUp from '../Signup Page/SignUp'
const Login=()=> {

    return(
        <div className="login">
            <h2>Login</h2>
            <h5><a href={SignUp}>Register</a></h5>
            <input className="login_input" type="email" placeholder="Enter Email"/>
            <input className="login_input" type="password" placeholder="Enter Password"/>
            <button className="inputButt" type="button" >Login</button>
        </div>
    )
}

export default Login