const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/Users-APIS", {
  newUrlParser: true,
  newUnifiedToplology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to Connect MongoDB");
});

db.once("open", () => {
  console.log("Connected To MongoDB");
});
