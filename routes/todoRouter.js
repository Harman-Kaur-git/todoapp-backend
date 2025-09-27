const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getToDo);
router.get("/post", todoController.postToDo);
router.get("/editform", todoController.editToDo);

module.exports = router;
