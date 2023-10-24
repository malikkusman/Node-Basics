const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 8080;
require("./utils/db");
const userroute = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();
app.use(bodyparser.json());
app.use("/api", userroute);
app.use(cors());

app.listen(port, () => {
  console.log(`Port is host at local host ${port}`);
});
