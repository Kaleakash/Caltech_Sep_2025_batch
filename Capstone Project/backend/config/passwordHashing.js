const bcrypt = require("bcrypt");

let hashPassword = async (originalPassword)=> {
        return await bcrypt.hash(originalPassword, 10);
}

let matchPassword = async(originalPassword,hashPassword)=> {
    return await bcrypt.compare(originalPassword,hashPassword); 
}


module.exports = {
  hashPassword,
  matchPassword
};