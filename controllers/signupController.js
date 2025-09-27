const fs = require("node:fs");
exports.signupController = (req, res) => {
  fs.readFile("./views/signup.html", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
