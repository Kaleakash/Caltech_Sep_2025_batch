var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',id:100,name:"John",age:21 });
});
let skillInfo=["java","python","react js","html"]

// display array data skillSet 
router.get("/skill",(request,response)=> {
    response.render("skillView.ejs",{skillInfo})
})

module.exports = router;
