import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/login/authThunk";
import { useNavigate } from "react-router-dom";

function Login() {
let [emailId,setEmailId]=useState("")
let [password,setPassword]=useState("")
let [typeOfUser,setTypeOfUser]=useState("")
let dispatch = useDispatch();
let message = useSelector(gs=>gs.auth.message)
let userType = useSelector(gs=>gs.auth.typeOfUser)
let navigate = useNavigate();
let signIn = async (event)=> {
    event.preventDefault();
    let login = {emailId,password,typeOfUser}
    console.log(message+" "+userType);
    let result = await dispatch(signInUser(login));
    console.log(result)
    let msg = result.payload.message;
    let user = result.payload.user.typeOfUser
    if(msg=="Signin successful" && user=="ADMIN"){
        navigate("/admin")
    }else if(msg=="Signin successful" && user=="CUSTOMER"){
        navigate("/customer")
    }else {

    }
}
    return(
        <div>
            <span style={{"color":"red"}}>{message}</span>
            <h2>Login Page</h2>
            <form onSubmit={signIn}>
            <input type="email" placeholder="Enter EmailId" value={emailId}
            onChange={(event)=>setEmailId(event.target.value)}/><br/>
            <input type="password" placeholder="Enter Password" value={password}
            onChange={(event)=>setPassword(event.target.value)}/><br/>
            <label>TypeOfUser</label>
            <input type="radio" name="typeOfUser" value="ADMIN"  onChange={(event)=>setTypeOfUser(event.target.value)}/>Admin
            <input type="radio" name="typeOfUser" value="CUSTOMER" onChange={(event)=>setTypeOfUser(event.target.value)}/>Customer<br/>
            <input type="submit" value="SigIn"/>
            <input type="reset" value="reset"/>
            </form>
            <a href="signup">SignUp</a>
        </div>
    )
}
export default Login;