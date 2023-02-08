const UserModal = require("../modal/user.modal");
const PRIVATEKEY = "myprivatekey";
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token || token == undefined) return next();
  const { _id } = jwt.verify(token, PRIVATEKEY);
  if (!_id) return next();
  const user = await UserModal.findById(_id);
  if (!user) return next();
  return res.send({ id: _id });
};
