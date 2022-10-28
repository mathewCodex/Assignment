const express = require("express");
const morgan = require("morgan");
//importing router
const todoRoutes = require("./Router/todoRoutes");
const mongoose = require("mongoose");

//express app
const app = express();
///connecting to dataBase...
const database = `mongodb+srv://mathewCodex:+++++@cluster1.avjfq.mongodb.net/*****?retryWrites=true&w=majority`;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

///////////
//creating a middleware that pass a data and gives us access to our list..
app.use(express.urlencoded({ extended: true }));

//requesting morgan..
app.use(morgan("dev"));

//adding statc files
app.use(express.static("public"));

///

app.use((req, res, next) => {
  console.log("In the next middlewarae");
  next();
});

app.get("/", (req, res) => {
  res.redirect("/todo");
});

//todo Routes
app.use("/todo", todoRoutes);
//404 in express..
app.use((req, res) => {
  res.status(404).json({ title: "404" });
});
