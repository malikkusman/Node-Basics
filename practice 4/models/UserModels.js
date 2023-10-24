const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    UserName: {
      type: String,
      unique: true,
    },
    Email: {
      type: String,
      unique: true,
    },
    Password: {
      type: String,
      unique: true,
    },
    Role: String,
    DateOfBirth: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
