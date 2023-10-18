const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    UserName: String,
    Email: String,
    Password: String,
    Role: String,
    DateOfBirth: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
