const mongoose = require("mongoose");
const app = require("./app");
const { error } = require("./schema");
const PORT = 3000;
//YqCe05JnYw7Ci5zH
mongoose
  //.connect(DB_HOST)
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
