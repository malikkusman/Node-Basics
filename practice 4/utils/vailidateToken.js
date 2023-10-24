const jwt = require("jsonwebtoken");
require("dotenv").config();

function validateToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  //console.log(token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //console.log(decoded);
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    console.log(req.user);
    next();
  });
}

module.exports = validateToken;
