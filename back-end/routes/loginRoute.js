const UserModal = require("../modal/user.modal");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const PRIVATEKEY = "myprivatekey";

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModal.findOne({ email });
  if (!user) {
    return res.send({
      message:
        "Not an existing accoutn. Please create and account and then try again!",
    });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, user.hashedPassword);
  if (!isPasswordCorrect) {
    return res.send({ message: "Incorrect password!" });
  }
  const token = jwt.sign({ _id: user._id }, PRIVATEKEY, {
    expiresIn: "1d",
  });
  res.cookie("token", token, { httpOnly: true }).send({ id: user._id });
});

module.exports = router;
