const fs = require("node:fs");
const path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
exports.loginController = (req, res) => {
    let userTrying=req.body;
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      var userId;
      let users=JSON.parse(data).users;
      let flag=false;
      users.forEach(user=>{
        if(user.email===userTrying.email && 
            user.password===userTrying.password)
        {
              req.session.user={
          username:user.username,
          email:user.email,
          userId:user.userId
        }
         
           userId=user.userId;
            flag=true;

        }
      })
      if(flag===true)
      {
        res.send(JSON.stringify({msg:"success"}));
      
      }
      else{
        res.send(JSON.stringify({msg:"failed"}));
      }
    }
  });
};
