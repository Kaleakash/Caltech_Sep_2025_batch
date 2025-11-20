let fs = require("fs");
let data= "Welcome to node JS synchronous module"
try{
fs.writeFileSync("demo3.txt",data)
console.log("Data Stored")
}catch(error){
    console.log(error)
}
console.log("Normal Statement1")
console.log("Normal Statement2")