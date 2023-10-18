const usermodel = require("../models/UserModels");

async function AddUser(req, res) {
  try {
    const Users = await usermodel.create(req.body);
    res.status(200).json({ Users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const Users = await usermodel.find();
    res.status(200).json({ Users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

async function updateUsers(req, res) {
  try {
    const userId = req.params.id;
    const updateUser = await usermodel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      res.status(200).json({ updateUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

async function deleteUsers(req, res) {
  try {
    const userId = req.params.id;
    const deleteUsers = await usermodel.findByIdAndDelete(userId);
    if (!deleteUsers) {
      return res.status(404).json({ error: "User Not Deleted" });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  AddUser,
  getAllUsers,
  updateUsers,
  deleteUsers,
};
