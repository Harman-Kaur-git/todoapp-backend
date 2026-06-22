const fs = require("node:fs");
const path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
exports.deleteaccount = (req, res) => {
  let deleteuser = req.body;  
  let flag = true;
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let users = JSON.parse(data).users;
      let updateUsers = [];
  
      users.forEach((user) => {
       
        if (user.userId != deleteuser.userId) {
          updateUsers.push(user);
        } else if (
          String(user.userId) === deleteuser.userId &&
          user.password !== deleteuser.password
        ) {
          updateUsers.push(user);
          flag = false;
        }
      });

      fs.writeFile(
        usersPath,
        JSON.stringify({ users: updateUsers }),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
        if (flag === true) {
    res.send("success");
  } else {
    res.send("fail");
  }
    }
  });

};
