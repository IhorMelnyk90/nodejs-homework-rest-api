const app = require("./app");

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();

const DB_HOST =
  "mongodb+srv://Ihor:lMRlIJxEbIC7VN8Y@cluster0.bwmw3st.mongodb.net/db-contacts?retryWrites=true&w=majority";
const PORT = 3001;

// const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
