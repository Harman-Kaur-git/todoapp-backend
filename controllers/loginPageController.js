const fs = require("node:fs");
exports.loginPageController = (req, res) => {
  fs.readFile("./views/login.html", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
