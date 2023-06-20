const express = require("express");
const  {getUsers, createUsers} = require("../controllers/users.js")

const router = express.Router();

router.get("/users", getUsers)
router.post("/user", createUsers)

module.exports = router;