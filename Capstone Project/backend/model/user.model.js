const mongoose = require("mongoose");
mongoose.pluralize(false);          // by default collection name create users
const userSchema = new mongoose.Schema(
{
    emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.com/, "Invalid email format"]   // a@b.c
    },
    password: {
    type: String,
    required: true
    },
    typeOfUser: {
    type: String,
    enum: ["ADMIN", "CUSTOMER"],
    required: true
    }
},
{ timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
