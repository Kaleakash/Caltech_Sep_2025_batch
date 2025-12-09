let dbConnection = require("../config/dbConfig");
//let {ConnectDb} = require("../config/dbConfig");
exports.storeProduct= async(product)=> {
    let con = await dbConnection.ConnectDb();
    let result = await con.collection("Product").insertOne(product)
    return result;
    //return await ConnectDb().collection("product").insertOne(product)
}

exports.findAll = async () => {
    let con = await dbConnection.ConnectDb();
    let result = await con.collection("Product").find().toArray();
    return result;
    //return await ConnectDb().collection("product").find().toArray();
}