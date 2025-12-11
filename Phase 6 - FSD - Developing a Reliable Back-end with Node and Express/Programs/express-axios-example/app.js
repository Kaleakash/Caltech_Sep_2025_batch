let express = require("express")
let axios = require("axios")
let app = express();


app.get("/callFakeAPI",async (request,response)=> {
    //response.send("Welcome to Rest API")
    try{
    let result = await axios.get("https://dummyjson.com/products")
    console.log(result.data.products)
    response.json({"msg":result.data.products})
    //response.json({"msg":result})
    }catch(error){
        response.json({"msg":error.message})
    }
})


app.listen(3000,()=>console.log("Server running on port number 3000"))