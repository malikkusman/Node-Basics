const usermodel = require("../models/UserModels");

async function AddUser(req, res) {
  try {
    const Users = await usermodel.create(req.body);
    res.status(201).json({ Users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  AddUser,
};
