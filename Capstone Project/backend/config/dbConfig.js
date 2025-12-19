const mongoose = require("mongoose");

let env = require("dotenv")
env.config();



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = {connectDB}