import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../features/login/authThunk";

function SignUp() {
let [emailId,setEmailId]=useState("")
let [password,setPassword]=useState("")
let [typeOfUser,setTypeOfUser]=useState("")
let dispatch = useDispatch();
let message = useSelector(gs=>gs.auth.message)
let signUp = (event)=> {
    event.preventDefault();
    let login = {emailId,password,typeOfUser}
    dispatch(signUpUser(login))

}
    return(
        <div>
            <span style={{"color":"red"}}>{message}</span>
            <h2>SignUp Page</h2>
            <form onSubmit={signUp}>
            <input type="email" placeholder="Enter EmailId" value={emailId}
            onChange={(event)=>setEmailId(event.target.value)}/><br/>
            <input type="password" placeholder="Enter Password" value={password}
            onChange={(event)=>setPassword(event.target.value)}/><br/>
            <label>TypeOfUser</label>
            <input type="radio" name="typeOfUser" value="ADMIN"  onChange={(event)=>setTypeOfUser(event.target.value)}/>Admin
            <input type="radio" name="typeOfUser" value="CUSTOMER" onChange={(event)=>setTypeOfUser(event.target.value)}/>Customer<br/>
            <input type="submit" value="SigUp"/>
            <input type="reset" value="reset"/>
            </form>
            <a href="/">Login</a>
        </div>
    )
}
export default SignUp;