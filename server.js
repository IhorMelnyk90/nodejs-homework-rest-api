const app = require("./app");

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const { DB_HOST, PORT = 3001 } = process.env;



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
