const express = require("express");
const cors = require("cors");
const app = express();

//Configuration
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to my RESTful API");
});

//Route to users api
app.use("/api/users", require("./routes/user"));

module.exports = app;
