const usermodel = require("../models/UserModels");

async function LoginUser(req, res) {
  try {
    const { Username, Password } = req.body;
    const loginuser = await usermodel.findOne({ Username, Password });

    res.status(200).json({ loginuser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  LoginUser,
};
