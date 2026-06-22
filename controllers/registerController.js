const fs = require("node:fs");
const path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
exports.registerController = (req, res) => {
  let newuser = req.body;
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let userData = JSON.parse(data);
      let users = userData.users;
      const emailExists = users.some((user) => user.email === newuser.email);

      if (emailExists) {
        return res.send({ msg: "email exists" });
      }

      users.push(newuser);

      fs.writeFile(usersPath, JSON.stringify({ users: userData.users}), (err) => {
        if (err) {
          return res.send({ msg: "fail" });
        }

        return res.send({ msg: "success" });
      });
      
    }
  });
};
