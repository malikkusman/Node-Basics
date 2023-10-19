const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const port = 3000;
const app = express();
require("./utils/db");
const cardrouter = require("./routes/CardRouttes");

app.use(bodyparser.json());
app.use("/api", cardrouter);
app.use(cors());

app.listen(port, () => {
  console.log(`Local Host is connecting to ${port}`);
});
