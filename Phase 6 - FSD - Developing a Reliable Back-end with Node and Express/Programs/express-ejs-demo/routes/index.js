var express = require('express');
var router = express.Router();
var loginController = require("../controller/loginController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',id:100,name:"John",age:21 });
});
let skillInfo=["java","python","react js","html"]

// display array data skillSet 
router.get("/skill",(request,response)=> {
    response.render("skillView.ejs",{skillInfo})
})

// open the login page 
router.get("/login",(request,response)=> {
  response.render("login.ejs",{msg:""})
})

// open the login page 
router.get("/signUp",(request,response)=> {
  response.render("signUp.ejs",{msg:""})
})

// check login details from db
router.post("/checkLoginDetails",loginController.checkLogin)


// check login details from db
router.post("/signUp",loginController.signUp)

module.exports = router;
