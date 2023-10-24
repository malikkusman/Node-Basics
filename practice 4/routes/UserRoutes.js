const express = require("express");

const route = express.Router();
const usercontroller = require("../controller/UserController");
const logincontroller = require("../controller/LoginController");
const validateToken = require("../utils/vailidateToken");

function adminDshboard(req, res) {
  res.send("Admin Dshboard");
}

function requireRoles(roles) {
  return (req, res, next) => {
    const userRole = req.user.Role;
    console.log(req.user); // Assuming you saved the user's role in req.user

    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({ message: "Permission denied" });
    }
  };
}

route.post("/users", usercontroller.AddUser);
route.get("/users", usercontroller.getAllUsers);
route.put("/users/:id", usercontroller.updateUsers);
route.delete("/users/:id", usercontroller.deleteUsers);
route.post("/login", logincontroller.LoginUser);
route.post("/admin", validateToken, adminDshboard);

route.get("/endpoint", validateToken, requireRoles(["Admin"]), (req, res) => {
  console.log("API endpoint handler");
  res.send("API response");
});

module.exports = route;
