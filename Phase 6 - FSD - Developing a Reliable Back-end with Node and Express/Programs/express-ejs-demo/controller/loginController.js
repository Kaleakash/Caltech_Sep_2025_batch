


exports.checkLogin = (request,response)=> {
    let login = request.body;
    console.log(login);
    if(login.emailId=="admin@gmail.com" && login.password=="admin@123"){
        response.render("success.ejs",{name:"admin"})
    }else {
        response.render("login.ejs",{msg:"failure try once again"})
    }
    //response.send("success")
}