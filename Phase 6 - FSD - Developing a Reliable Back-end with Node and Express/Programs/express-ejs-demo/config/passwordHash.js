let bcrptjs = require("bcryptjs");

async function hashPassword(password){
        let saltRound = 10;
    let hashFormatPassword = await bcrptjs.hash(password,saltRound);
    return hashFormatPassword;
}
async function compareHashPassword(originalPassword,hashPassword){
        let match = await bcrptjs.compare(originalPassword,hashPassword);
        if(match){
            return true;
        }else {
            return false;
        }
}

module.exports = {hashPassword,compareHashPassword}