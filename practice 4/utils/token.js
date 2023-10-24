const jwt = require("jsonwebtoken"); // Import the jwt library

const generateToken = (user) => {
  const payload = {
    role: user.role,
    id: user._id, // Assuming _id is the user's unique identifier
  };

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);

  return token;
};

module.exports = generateToken; // Export the function
