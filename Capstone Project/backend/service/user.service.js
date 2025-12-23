
const userRepo = require("../repository/user.repository");
const passwordHash = require("../config/passwordHashing");

const  signup = async (userData) => {
const existingUser = await userRepo.findUserByEmail(userData.emailId);
console.log(existingUser)
if (existingUser) {
    throw new Error("User already exists");
}

userData.password = await passwordHash.hashPassword(userData.password);
return userRepo.createUser(userData);
};

const signin = async (emailId, password) => {
const user = await userRepo.findUserByEmail(emailId);
if (!user) {
    throw new Error("Invalid email");
}

const isMatch = await passwordHash.matchPassword(password,user.password);
if (!isMatch) {
    throw new Error("Invalid password");
}
return {
    emailId: user.emailId,
    typeOfUser: user.typeOfUser
};
};

module.exports = {
signup,
signin
};

