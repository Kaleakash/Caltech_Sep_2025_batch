const express = require("express");
const userRoutes = require("./router/user.router");

const app = express();
// adding the middleware 

app.use(express.json());

// providing main path 
app.use("/api/login", userRoutes);

module.exports = app;
