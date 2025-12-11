const Login = require("../model/loginModel")
let loginRepository = require("../repository/loginRepository")

exports.signUp = async (login)=> {
    let LoginRef = new Login(login.emailId,login.password);
    let result =  await loginRepository.checkByEmailId(LoginRef.emailId)
    console.log(result);
    if(result.length!=0){
        return "EmailId already present"
    }else {
        return await loginRepository.signUp(LoginRef);
    }
}

exports.signIn = async (login) => {
    let LoginRef = new Login(login.emailId,login.password);
    return await loginRepository.signIn(LoginRef);
}