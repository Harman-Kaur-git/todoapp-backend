const fs = require("node:fs");
let userId;
exports.newTaskController = (req, res) => {
  let newtask = req.body;

  let checkEdit = req.query.edit || false;
  let add = true;
  let edit = false;
  fs.readFile("../data/todos.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let taskdata = JSON.parse(data);
      let todos = taskdata.todos;
      let flag = false;

      if (checkEdit === false) {
        todos.forEach((todo) => {
          if (todo.id === newtask.id && todo.userId === newtask.userId) {
            add = false;
            return;
          }
        });
        if (add === true && edit === false) {
          todos.push(newtask);
          flag = true;
        }

        taskdata.todos = todos;
      } else {
        
        if (req.session.user) {
          userId = req.session.user.userId;
        }
        todos.forEach((todo) => {
          if (todo.id === newtask.id && todo.userId === String(userId)) {
            console.log("hi")
            todo.title = newtask.title;
            todo.completed = newtask.completed;
          }
        });
      }
      fs.writeFile("../data/todos.json", JSON.stringify({todos:taskdata.todos}), (err) => {
        if (err) {
          console.log(err);
        } else {
          if (flag === true) {
            res.send(JSON.stringify({ msg: "success" }));
          } else {
            res.send(JSON.stringify({ msg: "fail" }));
          }
        }
      });
    }
  });
};
