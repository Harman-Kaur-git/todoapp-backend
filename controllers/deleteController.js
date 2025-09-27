const fs = require("node:fs");
exports.deleteController= (req, res) => {
    let deleteTask=req.body.id;
    fs.readFile("../data/todos.json","utf8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            let todosData=JSON.parse(data);
            let todos=todosData.todos;
            console.log(todos);
            let newtodos=[];
            todos.forEach(todo=>{
                if(todo.id!=deleteTask)
                {
                    newtodos.push(todo);
                }
            })
            fs.writeFile("../data/todos.json",JSON.stringify({todos:newtodos}),(err)=>{
                    if(err)
                    {
                          res.send(JSON.stringify({ msg: "fail" }));

                    }
                    else{
                        res.render("home",{todos:newtodos});
                    }
            })
        }
    })
}
