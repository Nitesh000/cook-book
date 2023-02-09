const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createAdmin } = require("./controllers/admin");

const app = express();
const port = 3000;

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://localhost:27017/cook-book",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      throw new Error("MongoDB didn't connect!");
    } else {
      console.log("MongoDB connected!");
    }
  }
);

createAdmin();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
// app.use("/signup", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
// app.use("/dashboard", require("./routes/dashboardRoute"));

app.listen(port, (err) => {
  if (err) {
    throw new Error("Server didn't start!");
  } else {
    console.log("Server is running on port " + port);
  }
});
