const express = require("express");
const path = require("path"); 
const cors = require("cors");
const bodyParser = require("body-parser");



const mailrouter = require("./src/routes/mail");

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public"))); 

app.use("/home", mailrouter);

app.get("/", (req,res)=>{
    res.render("home");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is runing in port "+PORT);
})