const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModal = require("../modal/user.modal");

router.post("/", async (res, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  let newUser = new UserModal({
    name,
    email,
    hashedPassword,
  });
  const response = await newUser.save();
  if (!response) {
    return res.send({
      message: "Something went wrong!, not able to create an account.",
    });
  }
  return res.send(response);
});

moudle.exports = router;
