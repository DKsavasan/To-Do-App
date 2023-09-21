const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose");

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
});

app.post('/',(req, res) => {
    console.log(req.body);
});

mongoose.connect(process.env.DB_connect, {useNewUrlParser: true}, () => {
    console.log("Connected to the database");
    app.listen(3000, () => console.log("Server up and running"));
});