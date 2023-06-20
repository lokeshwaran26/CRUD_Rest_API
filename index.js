const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.js")


const app = express();
const Port = 5000; 

app.use(bodyParser.json());
app.use(cors());
app.use("/", usersRoutes)


app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.all("*",  (req, res)=>{
    res.send("404 Error!")
})

app.listen(Port, ()=> console.log(`Server is listening to ${Port}`));
