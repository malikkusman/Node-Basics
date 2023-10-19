const express = require("express");

const router = express.Router();
const cardcontroller = require("../controllers/CardController");

router.post("/Card", cardcontroller.AddCard);

module.exports = router;
