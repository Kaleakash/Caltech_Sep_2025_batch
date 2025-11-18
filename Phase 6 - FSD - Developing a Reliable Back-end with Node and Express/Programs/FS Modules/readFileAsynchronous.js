let fs = require("fs");
fs.readFile("demo2.txt",(error,data)=> {
    if(!error){
        //console.log("ready to load the data")
        //console.log(data);  // it display in buffer format 
        console.log(data.toString());// convert buffer to string format  
    }else {
        console.log(error)
    }
})
console.log("Normal Statement1");
console.log("Normal Statement2");