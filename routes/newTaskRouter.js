const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const { newTaskController } = require("../controllers/newTaskController");
router.post("/", newTaskController);
module.exports = router;
