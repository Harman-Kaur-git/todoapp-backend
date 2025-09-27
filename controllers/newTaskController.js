const fs = require("node:fs");
exports.newTaskController = (req, res) => {
  let newtask = req.body;
  let checkEdit = req.query.edit || false;
  let flag = false;
  fs.readFile("../data/todos.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let taskdata = JSON.parse(data);
      let todos = taskdata.todos;
      let flag = false;
      let add;
      let edit;
      todos.forEach((todo) => {
        if (checkEdit === false) {
          if (todo.id === newtask.id && todo.userId === newtask.userId) {
            add = false;
          } else {
            add = true;
            edit = false;
          }
        } else {
          if (todo.id === newtask.id) {
            todo.title = newtask.title;
            todo.completed = newtask.completed;
            console.log(todo);
          }
        }
      });

      if (add === true && edit === false) {
        todos.push(newtask);
        flag = true;
      }

      taskdata.todos = todos;

      fs.writeFile("../data/todos.json", JSON.stringify(taskdata), (err) => {
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
