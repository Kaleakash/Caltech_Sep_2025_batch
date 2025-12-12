let bcrptjs = require("bcryptjs");
let originalPassword = "admin@123";

async function hashPassword(password){
        let saltRound = 10;
       // bcrptjs.hash("abc@123",)
    let hashFormatPassword = await bcrptjs.hash(password,saltRound);
    return hashFormatPassword;
}
async function displayPasswordDetails(){
let hashFormatPassword = await hashPassword(originalPassword)
console.log("original password "+originalPassword)
console.log("hashFormat Password "+hashFormatPassword);
compareHashPassword(originalPassword,hashFormatPassword)
compareHashPassword("admin@123",hashFormatPassword);
}

async function compareHashPassword(originalPassword,hashPassword){
        let match = await bcrptjs.compare(originalPassword,hashPassword);
        if(match){
            console.log("password match")
        }else {
            console.log("password mismatch")
        }
}

displayPasswordDetails();