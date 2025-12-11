let {ConnectDb} = require("../config/dbConfig");
exports.signUp= async(login)=> {
    let db = await ConnectDb();
    return await db.collection("Login").insertOne(login)
}

exports.signIn = async (login) => {
    let db = await ConnectDb();
    return await db.collection("Login").find({$and:[{emailId:login.emailId},{password:login.password}]}).toArray()
}

exports.checkByEmailId = async (email) => {
    console.log("in repository "+email)
    let db = await ConnectDb();
    return await db.collection("Login").find({emailId:email}).toArray();
}