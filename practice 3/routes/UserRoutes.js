const express = require("express");

const route = express.Router();
const usercontroller = require("../controller/UserController");

route.post("/users", usercontroller.AddUser);
route.get("/users", usercontroller.getAllUsers);
route.put("/users/:id", usercontroller.updateUsers);
route.delete("/users/:id", usercontroller.deleteUsers);

module.exports = route;
