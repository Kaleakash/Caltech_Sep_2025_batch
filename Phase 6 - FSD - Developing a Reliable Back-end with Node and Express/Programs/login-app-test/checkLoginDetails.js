function checkLogin(){
    let emailId = document.getElementById("emailid").value
    let password = document.getElementById("password").value;
    
    if(emailId.length==0){
        document.getElementById("msg").innerHTML="user name is required"
        return false;
    } else if(password.length==0){
        document.getElementById("msg").innerHTML="password is required"
        return false;
    } else if(emailId=="admin@gmail.com" && password=="admin@123"){
        document.getElementById("msg").innerHTML="successfully login"
        return false;
    }else {
        document.getElementById("msg").innerHTML="failure try once again"
        return false;
    }
}