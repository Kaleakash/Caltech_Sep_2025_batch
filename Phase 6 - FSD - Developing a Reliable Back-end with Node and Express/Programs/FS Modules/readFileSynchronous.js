let fs = require("fs");
try{
let result = fs.readFileSync("demo1.txt");
//console.log(result);    // buffer format 
console.log(result.toString()) // string format 
}catch(error){
    console.log(error.message)
}
console.log("Normal Statement1")
console.log("Normal Statement2")