
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
    res.send("User Added SuccessFully");

}

const getUser = (req, res) =>{
    const singleUser = users.filter((user)=> user.id === req.params.id)
    res.send(singleUser);

}

const deleteUser = (req, res) =>{
    users = users.filter((user)=> user.id !== req.params.id)
    res.send("User Deleted SuccessFully");
}

const updateUser = (req, res) =>{
    const user = users.find((user) => user.id === req.params.id)
    user.name = req.body.name
    user.email = req.body.email
    user.contact = req.body.contact

    res.send("Updated Successfully!")
}


module.exports = { getUsers, createUsers, getUser, deleteUser, updateUser};