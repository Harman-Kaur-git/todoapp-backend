const fs = require("node:fs");
exports.loginController = (req, res) => {
    let userTrying=req.body;
  fs.readFile("../data/users.json", "utf8", (err, data) => {
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
