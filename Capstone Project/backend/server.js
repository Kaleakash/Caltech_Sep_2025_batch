const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const db_connection_ref = require("./config/dbConfig");

db_connection_ref.connectDB();        // call database connection 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
