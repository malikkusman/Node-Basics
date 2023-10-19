const card = require("../model/CardModel");

async function AddCard(req, res) {
  try {
    const cards = await card.create(req.body);
    res.status(200).json({ cards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  AddCard,
};
