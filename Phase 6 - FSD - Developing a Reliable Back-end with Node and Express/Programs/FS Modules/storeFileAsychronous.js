let fs = require("fs");
console.log("fs module loaded...")
let msg = "Welcome to Node JS with we are going to learn express module";
// append the data 
fs.writeFile("demo1.txt",msg,{flag:"a+"},(error)=> {
    if(!error){
        console.log("Data stored in file successfully demo1.txt")
    }else {
        console.log(error)
    }
});
console.log("Normal Statement1")
console.log("Normal Statement2");
// override the data 
fs.writeFile("demo2.txt",msg,(error)=> {
    if(!error){
        console.log("Data stored in file successfully demo2.txt")
    }else {
        console.log(error)
    }
});
