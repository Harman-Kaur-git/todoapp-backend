const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const { deleteController } = require("../controllers/deleteController");
router.post("/", deleteController);
module.exports = router;
