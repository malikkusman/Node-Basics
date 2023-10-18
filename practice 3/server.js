const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 8080;

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Port is host at local host ${port}`);
});

// bbdsgdgh;
