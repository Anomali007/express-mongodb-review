// ./database/index.js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newlist", {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", ()=> console.log("connection error"));
db.once("open", () => console.log("successfully connected to mongodb... ;"));

const List = mongoose.Schema({
    task: String  // {type: string, unique: true}   /USE AT YOUR OWN RISK
});

const Todo = mongoose.model("Todo", List);

module.exports = Todo;