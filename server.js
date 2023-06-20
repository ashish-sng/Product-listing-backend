const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
      console.log(`Server running on port ${port}`);
    })
    .catch(() => {
      console.log("Connection failed!");
    });
});
