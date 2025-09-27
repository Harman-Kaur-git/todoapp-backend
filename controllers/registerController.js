const fs = require("node:fs");
exports.registerController = (req, res) => {
  let newuser = req.body;
  fs.readFile("../data/users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let userData = JSON.parse(data);
      let users = userData.users;
      users.push(newuser);
      fs.writeFile(
        "../data/users.json",
        JSON.stringify({ users: userData.users }),
        (err) => {
          if (err) {
            res.send(JSON.stringify({ msg: "fail" }));
          } else {
            res.send(JSON.stringify({ msg: "success" }));
          }
        }
      );
    }
  });
};
