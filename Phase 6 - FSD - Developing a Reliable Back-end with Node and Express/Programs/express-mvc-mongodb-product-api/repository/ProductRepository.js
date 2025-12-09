let {ConnectDb} = require("../config/dbConfig");
exports.storeProduct= async(product)=> {
    let db = await ConnectDb();
    return await db.collection("product").insertOne(product)
}

exports.findAll = async () => {
    let db = await ConnectDb();
    return await db.collection("Product").find().toArray();
}