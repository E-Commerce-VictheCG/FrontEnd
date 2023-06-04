import './SignUp.css'
const SignUp=()=>{
    return (
        <div className="register">
            <h2>Register</h2>
            <input className="inputBox" type="text" placeholder="Enter Name"/>
            <input className="inputBox" type="text" placeholder="Enter Email"/>
            <input className="inputBox" type="password" placeholder="Enter Password"/>
            <button className="inputButt" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp