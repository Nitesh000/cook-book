const UserModal = require("../modal/user.modal");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createAdmin = async () => {
  const adminPassword = await bcrypt.hash("admin123", saltRounds);
  const Admin = new UserModal({
    name: "Admin",
    email: "admin@admin.com",
    hashedPassword: adminPassword,
    isAdmin: true,
  });

  await Admin.save();
};
