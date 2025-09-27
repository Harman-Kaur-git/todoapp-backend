exports.deleteForm=(req,res)=>{
    let userId=req.session.user.userId;
    res.render("deactivate",{userId});
}