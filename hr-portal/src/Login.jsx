import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeOfUser,setTypeOfUser]=useState("");
let URL ="http://localhost:3000/logins"
let navigate = useNavigate();
let signIn=async (event)=>{
    event.preventDefault();
    console.log(emailId+" "+password+" "+typeOfUser)
    let loginDetails = await axios.get(URL);
    //console.log(loginDetails.data)
    let result = loginDetails.data.find(l=>l.emailId==emailId && l.password==password && l.typeofuser==typeOfUser);
    if(result==undefined){
        alert("account not present")
    }else {
        //alert("successfully login")
        if(typeOfUser=="hr"){
                navigate("/hrDashboard")
        }else {

        }
    }
    setEmailId("")
    setPassword("")
    setTypeOfUser("")
}
    return(
        <div>
            <h3>Login Page</h3>
            <form onSubmit={signIn} className="form-group">
                <label>EmailId</label>
                <input type="email" name="email" value={emailId}
                onChange={(event)=>setEmailId(event.target.value)}
                className="form-control"
                />  <br/>
                <label>Password</label>
                <input type="password" name="password" value={password}
                onChange={(event)=>setPassword(event.target.value)} className="form-control"/>  <br/>

                <label>TypeOfUser</label>
                <input type="radio" name="typeOfUser" value="hr"
                onChange={(event)=>setTypeOfUser(event.target.value)}/>:Hr
                <input type="radio" name="typeOfUser" value="employee"
                onChange={(event)=>setTypeOfUser(event.target.value)} />:Employee    
                <br/>
                <input type="submit" value="SignIn" className="btn btn-success"/>
                <input type="reset" value="reset" className="btn btn-info"/>
            </form>
        </div>
    )
}
export default Login;