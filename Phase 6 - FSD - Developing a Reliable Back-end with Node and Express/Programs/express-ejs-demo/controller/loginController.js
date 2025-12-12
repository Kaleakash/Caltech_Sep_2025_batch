let loginService = require("../service/loginService")
exports.checkLogin = async (request,response)=> {
    let login = request.body;
    console.log(login);
    try{
    let result = await loginService.signIn(login);
    if(result){
        response.render("success.ejs",{name:login.emailId})   
    }else {
        response.render("login.ejs",{msg:"failure try once again"})
    }
    }catch(error){
        response.send(error.message)
    }
}

exports.signUp = async (request,response)=> {
    let login = request.body;
    console.log(login);
    try{
    let result = await loginService.signUp(login)
    response.render("signUp.ejs",{msg:result});
    }catch(error){
        response.send(error.message)
    }
}