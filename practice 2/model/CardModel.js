const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema(
  {
    BankName: String,
    HolderName: String,
    CardType: String,
    CardNumber: Number,
    CVC: Number,
    IssueDate: Date,
    CardExpire: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BankData", BankSchema);
