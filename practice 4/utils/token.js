const jwt = require("jsonwebtoken");
require("dotenv").config(); // Import the jwt library

const generateToken = (user) => {
  const payload = {
    Role: user.Role,
    id: user._id, // Assuming _id is the user's unique identifier
  };
  console.log(payload);

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);

  return token;
};

module.exports = generateToken; // Export the function
