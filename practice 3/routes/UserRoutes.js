const express = require("express");

const route = express.Router();
const usercontroller = require("../controller/UserController");
const logincontroller = require("../controller/LoginController");

route.post("/users", usercontroller.AddUser);
route.get("/users", usercontroller.getAllUsers);
route.put("/users/:id", usercontroller.updateUsers);
route.delete("/users/:id", usercontroller.deleteUsers);
route.post("/login", logincontroller.LoginUser);

module.exports = route;
