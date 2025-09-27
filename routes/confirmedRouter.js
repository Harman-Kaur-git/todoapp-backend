const express=require("express");
const router=express.Router();
const confirmedController=require("../controllers/confirmedController");
router.get("/",confirmedController.deleteForm);
module.exports=router;