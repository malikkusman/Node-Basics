const express = require("express");

const route = express.Router();
const usercontroller = require("../controller/UserController");

route.post("/users", usercontroller.AddUser);

module.exports = route;
