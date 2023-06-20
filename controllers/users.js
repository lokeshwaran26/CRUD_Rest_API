
const {v4 : uuid } = require("uuid");
// import { v4 as uuid } from "uuid"
const v4 = uuid;


let users = [];

const getUsers = (req ,res) =>{
    res.send(users)
};

const createUsers = (req, res)=>{
    const user = req.body
    users.push({...user, id: uuid()})
    res.send("User Added SuccessFully")

}

module.exports = { getUsers, createUsers};