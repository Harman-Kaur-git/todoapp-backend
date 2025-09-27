const { checkPrime } = require("node:crypto");
const fs = require("node:fs");
exports.getToDo = function (req, res) {
  fs.readFile("../data/todos.json", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      let todos = [];
      let checkId;
      todos = JSON.parse(data).todos;
      if (req.session.user) {
        checkId = req.session.user.userId || "";
      }
      let usertodos = [];
      todos.forEach((todo) => {
        if (Number(todo.userId) === checkId) {
          usertodos.push(todo);
        }
      });
      res.render("home", { todos: usertodos, user: req.session.user });
    }
  });
};

exports.postToDo = function (req, res) {
  let userId;
  if (req.session.user) {
    userId = req.session.user.userId;
  }

  res.render("postfile", { userId: userId });
};

exports.editToDo = function (req, res) {
  let editId = req.query.id;
  let editTitle = req.query.title;
  res.render("edit", { id: editId, title: editTitle });
};
