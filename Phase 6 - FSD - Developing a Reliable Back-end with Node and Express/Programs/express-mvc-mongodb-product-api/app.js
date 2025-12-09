let express = require("express");
let app  = express();
let evn = require("dotenv")
let dbConnection = require("./config/dbConfig")
let productRouter = require("./router/ProductRouter")
evn.config();
let PORT= process.env.PORT
dbConnection.ConnectDb();

// middleware 
app.use(express.json())

// http://localhost:3000/api/product/*
app.use("/api/product",productRouter)





app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`))