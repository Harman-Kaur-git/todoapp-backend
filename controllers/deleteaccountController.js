const fs = require("node:fs");
exports.deleteaccount = (req, res) => {
  let deleteuser = req.body;  
  let flag = true;
  fs.readFile("../data/users.json", "utf8", (err, data) => {
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
        "../data/users.json",
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
