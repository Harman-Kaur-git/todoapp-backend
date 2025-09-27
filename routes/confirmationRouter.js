const express=require("express");
const router=express.Router();
const confirmationController=require("../controllers/confirmationController");
router.get("/",confirmationController.confirmationForm);
module.exports=router;