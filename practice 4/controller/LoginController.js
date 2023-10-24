const usermodel = require("../models/UserModels");

async function LoginUser(req, res, next) {
  try {
    const { Username, Password } = req.body;
    const loginuser = await usermodel.findOne({ Username, Password });
    if (!loginuser) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    var token = generteLoginToken(loginuser);
    return res.status(200).json({
      message: "Logged in successfully",
      UserName: Username,
      FirstName: loginuser.FirstName,
      userId: loginuser.id,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  LoginUser,
};
