const express=require("express");
const router=express.Router();
const deleteaccountController=require("../controllers/deleteaccountController");
router.post("/",deleteaccountController.deleteaccount);
module.exports=router;