const Login = require("../model/loginModel")
let loginRepository = require("../repository/loginRepository")
let bcrptjs = require("../config/passwordHash");
exports.signUp = async (login)=> {
    let LoginRef = new Login(login.emailId,login.password);
    let result =  await loginRepository.checkByEmailId(LoginRef.emailId)
    console.log(result);
    if(result.length!=0){
        return "EmailId already present"
    }else {
        let hashPassword = await bcrptjs.hashPassword(LoginRef.password);
        LoginRef.password=hashPassword;
        let result1 = await loginRepository.signUp(LoginRef);
        if(result1){
            return "Account created successfully"
        }
    }
}

exports.signIn = async (login) => {
    let LoginRef = new Login(login.emailId,login.password);
    let loginsFromDb =  await loginRepository.checkByEmailId(LoginRef.emailId)
    if(loginsFromDb.length==0){
        return false;
    }else {
        let loginDb = loginsFromDb[0];
        console.log(loginDb)        // hashPassword 
        console.log(LoginRef)   // text password 
        let match = await bcrptjs.compareHashPassword(LoginRef.password,loginDb.password)
        if(match){
            return true
        }else {
            return false;
        }
    }
}