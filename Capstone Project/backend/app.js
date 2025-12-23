const express = require("express");
const userRoutes = require("./router/user.router");
const cors = require("cors");

const app = express();
// adding the middleware 

app.use(express.json());
app.use(cors())     // enable to access rest api 
// providing main path 
app.use("/api/login", userRoutes);

module.exports = app;
