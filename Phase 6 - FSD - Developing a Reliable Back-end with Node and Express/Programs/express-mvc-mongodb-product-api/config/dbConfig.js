let {MongoClient} = require("mongodb")
let env = require("dotenv")
env.config();
let URL = process.env.MONGO_DB_URL
let DB_NAME=process.env.DB_NAME
let client;
let db;
async function ConnectDb() {
    if(!client){
        try{
        client= new MongoClient(URL)
        await client.connect();
        db = client.db(DB_NAME)
        console.log("Connected mongo db")
        }catch(error){
            console.log(error.message)
            return error.message
        }
    }
    return db;
}

module.exports = {ConnectDb}