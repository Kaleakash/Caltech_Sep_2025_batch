let loginService = require("../service/loginService")

// check login details manually 
// exports.checkLogin = (request,response)=> {
//     let login = request.body;
//     console.log(login);
//     if(login.emailId=="admin@gmail.com" && login.password=="admin@123"){
//         response.render("success.ejs",{name:"admin"})
//     }else {
//         response.render("login.ejs",{msg:"failure try once again"})
//     }
//     //response.send("success")
// }

exports.checkLogin = async (request,response)=> {
    let login = request.body;
    console.log(login);
    try{
    let result = await loginService.signIn(login);
    response.send(result)
    }catch(error){
        response.send(error.message)
    }

    // if(login.emailId=="admin@gmail.com" && login.password=="admin@123"){
    //     response.render("success.ejs",{name:"admin"})
    // }else {
    //     response.render("login.ejs",{msg:"failure try once again"})
    // }
    //response.send("success")
}

exports.signUp = async (request,response)=> {
    let login = request.body;
    console.log(login);
    try{
    let result = await loginService.signUp(login)
    response.send(result)
    }catch(error){
        response.send(error.message)
    }
    // if(login.emailId=="admin@gmail.com" && login.password=="admin@123"){
    //     response.render("success.ejs",{name:"admin"})
    // }else {
    //     response.render("login.ejs",{msg:"failure try once again"})
    // }
    //response.send("success")
}